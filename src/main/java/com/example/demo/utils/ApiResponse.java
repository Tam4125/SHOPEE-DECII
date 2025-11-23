package com.example.demo.utils;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ApiResponse<T> {
    private boolean success;
    private String message;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private T data;

    // Convenience constructors
    public ApiResponse(boolean success, String message) {
        this.success = success;
        this.message = message;
    }
}
