package com.example.app.controller;

import com.example.app.model.FormData;
import com.example.app.repository.FormDataRepository;
import com.example.app.service.FormService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Controller
public class FormController {
    private final FormService formService;
    private final FormDataRepository formDataRepository;

    @Autowired
    public FormController(FormService formService, FormDataRepository formDataRepository) {
        this.formService = formService;
        this.formDataRepository = formDataRepository;
    }

    @GetMapping("/")
    public String index(Model model) {
        return "index";
    }

    @PostMapping("/")
    public String saveFormData(@RequestBody FormData formData) {
        String firstName = formData.getFirstName();
        String lastName = formData.getLastName();
        String email = formData.getEmail();
        String comment = formData.getComment();

        formData.setFirstName(firstName);
        formData.setLastName(lastName);
        formData.setEmail(email);
        formData.setComment(comment);

        formService.saveFormData(formData);
        formDataRepository.save(formData);
        return "redirect:/success";
    }

    @GetMapping("/success")
    public String successPage() {
        return "success";
    }

    @GetMapping("/api/data")
    public ResponseEntity<List<FormData>> getAllFormData() {
        List<FormData> formDataList = (List<FormData>) formDataRepository.findAll();
        return ResponseEntity.ok(formDataList);
    }
}
