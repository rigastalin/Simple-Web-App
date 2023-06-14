package com.example.app.repository;

import com.example.app.model.FormData;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FormDataRepository extends CrudRepository<FormData, Long> {
}
