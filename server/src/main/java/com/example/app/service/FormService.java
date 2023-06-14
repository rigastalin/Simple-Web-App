package com.example.app.service;

import com.example.app.model.FormData;
import com.example.app.repository.FormDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FormService {
    private final FormDataRepository formDataRepository;

    @Autowired
    public FormService(FormDataRepository formDataRepository) {
        this.formDataRepository = formDataRepository;
    }

    public void saveFormData(FormData formData) {
        System.out.println("Saving form data: " + formData);
        formDataRepository.save(formData);
    }
}
