package com.docnct.service;

import com.docnct.entity.Doctor;
import com.docnct.repository.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class DoctorService {

    @Autowired
    DoctorRepository doctorRepository;

    public List<Doctor> findAllDoctors(){
        return doctorRepository.findAll();
    }
}
