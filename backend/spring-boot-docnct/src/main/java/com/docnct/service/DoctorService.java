package com.docnct.service;

import com.docnct.entity.Doctor;
import com.docnct.repository.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class DoctorService {

    @Autowired
    DoctorRepository doctorRepository;

    public List<Doctor> findAllDoctors(){
        return doctorRepository.findAll();
    }
}
