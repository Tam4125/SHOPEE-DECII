package com.example.demo.service;

import ai.onnxruntime.*;
import com.example.demo.models.UserForML;
import org.springframework.stereotype.Service;

import java.net.URL;
import java.nio.file.Paths;
import java.util.Map;
import java.util.Objects;

@Service
public class MLModelService {

    private OrtEnvironment env;
    private OrtSession session;

    public MLModelService() throws Exception {
        env = OrtEnvironment.getEnvironment();

        // Load ONNX file from resources/model/
        URL modelUrl = Objects.requireNonNull(
                getClass().getClassLoader().getResource("model/logreg.onnx"),
                "ONNX model file not found in resources/model/"
        );

        String modelPath = Paths.get(modelUrl.toURI()).toString();

        session = env.createSession(modelPath,
                new OrtSession.SessionOptions());
    }

    public float predict(UserForML user) throws OrtException  {

        float[][] input = new float[1][22]; // exact number of features

        input[0] = new float[]{
                user.getAddToCart(),
                user.getClick(),
                user.getFavourite(),
                user.getPurchase(),
                user.getSaleClickPurchase(),
                user.getSaleFavPurchase(),
                user.getSaleAddPurchase(),
                user.getNosaleClickPurchase(),
                user.getNosaleFavPurchase(),
                user.getNosaleAddPurchase(),
                user.getPurchaseRatio(),
                user.getAvgActionDayRatio(),
                user.getAvgActiveDay(),
                user.getLongestInactivityDays(),
                user.getLongestPurchaseGap(),
                user.getAge(),
                user.getSexF(),
                user.getSexM(),
                user.getSexOther() ,
                user.getMaritalStatusDivorced(),
                user.getMaritalStatusMarried(),
                user.getMaritalStatusSingle()
        };

        // Create tensor
        OnnxTensor tensor = OnnxTensor.createTensor(env, input);

        Map<String, OnnxTensor> inputMap = Map.of(session.getInputNames().iterator().next(), tensor);

        OrtSession.Result result = session.run(inputMap);
        Object raw = result.get(0).getValue();

        float prediction;

        if (raw instanceof float[][] outF) {
            prediction = outF[0][0];
        }
        else if (raw instanceof float[] outF1) {
            prediction = outF1[0];
        }
        else if (raw instanceof long[][] outL2) {
            prediction = outL2[0][0];
        }
        else if (raw instanceof long[] outL1) {
            prediction = outL1[0];
        }
        else if (raw instanceof double[][] outD2) {
            prediction = (float) outD2[0][0];
        }
        else if (raw instanceof double[] outD1) {
            prediction = (float) outD1[0];
        }
        else {
            throw new RuntimeException("Unsupported ONNX output type: " + raw.getClass());
        }

        return prediction;
    }
}
