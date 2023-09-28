package com.docnct.service;

import com.docnct.entity.Specialty;
import com.docnct.repository.SpecialtyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class SpecialtyService {
    @Autowired
    SpecialtyRepository specialtyRepository;

    public List<Specialty> findAllSpecialties(){
        return specialtyRepository.findAll();
    }
}
