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

        // 1. Get the model as an InputStream from the classpath
        try (java.io.InputStream modelStream = Objects.requireNonNull(
                getClass().getClassLoader().getResourceAsStream("model/logreg.onnx"),
                "ONNX model file not found in resources/model/"
        )) {
            // 2. Create a temporary file to extract the model to
            java.nio.file.Path tempModelPath = java.nio.file.Files.createTempFile("onnx-model-", ".onnx");

            // 3. Copy the model bytes from the JAR (stream) to the temporary file
            java.nio.file.Files.copy(modelStream, tempModelPath, java.nio.file.StandardCopyOption.REPLACE_EXISTING);

            // 4. Get the path of the temporary file and use it to create the session
            String modelPath = tempModelPath.toString();

            session = env.createSession(modelPath,
                    new OrtSession.SessionOptions());

            // 5. IMPORTANT: Register a shutdown hook to delete the temp file
            // after the application exits, though the OS usually cleans /tmp.
            tempModelPath.toFile().deleteOnExit();

        } catch (java.io.IOException e) {
            throw new RuntimeException("Failed to load or copy ONNX model.", e);
        }
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
