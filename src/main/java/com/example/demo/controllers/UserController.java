package com.example.demo.controllers;
import com.example.demo.models.UserForML;
import com.example.demo.repositories.UserForMLRepository;
import com.example.demo.service.MLModelService;
import com.example.demo.mappers.UserMapper;
import com.example.demo.models.User;
import com.example.demo.repositories.UserRepository;
import com.example.demo.utils.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserForMLRepository userForMLRepository;

    @Autowired
    private UserMapper userMapper;

    @Autowired
    private MLModelService modelService;

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<User>> getUser(
            @PathVariable(name = "id") Integer user_id
    ) {
        var user = userRepository.findById(user_id).orElse(null);
        if(user == null) {
            return ResponseEntity.notFound().build();
        }
        ApiResponse<User> responseBody = new ApiResponse<>(
                true,
                "Fetch user successfully",
                user
        );
        return ResponseEntity.ok(responseBody);
    }

    @GetMapping("/clusters")
    public ResponseEntity<ApiResponse<Map<String, Object>>> getClusterStats() {
        List<User> users = userRepository.findAll();

        Map<Integer, Long> clusterCount = users.stream()
                .collect(Collectors.groupingBy(User::getCluster, Collectors.counting()));

        Map<Integer, Double> avgAge = users.stream()
                .collect(Collectors.groupingBy(User::getCluster,
                        Collectors.averagingInt(User::getAge)));

        Map<String, Object> result = new HashMap<>();
        result.put("clusterCount", clusterCount);
        result.put("avgAge", avgAge);

        ApiResponse<Map<String, Object>> responseBody = new ApiResponse<>(
                true,
                "Get cluster stats successfully",
                result
        );
        return ResponseEntity.ok(responseBody);
    }

    @GetMapping("/{id}/predict")
    public ResponseEntity<ApiResponse<Float>> predictRetention(
            @PathVariable(name = "id") int user_id
    ) throws Exception {

        UserForML user = userForMLRepository.findByUserId(user_id);
        if (user==null) {
            return ResponseEntity.notFound().build();
        }

        ApiResponse<Float> responseBody = new ApiResponse<>(
                true,
                "Predict Successfully",
                modelService.predict(user)
        );
        return ResponseEntity.ok(responseBody);
    }



}
