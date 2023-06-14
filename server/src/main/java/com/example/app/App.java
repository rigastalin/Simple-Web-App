package com.example.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = "com.example.app")
public class App {
    public static void main(String[] args) {
        SpringApplication.run(App.class, args);
    }
}
