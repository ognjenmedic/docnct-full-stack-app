package com.docnct.controller;

import com.docnct.entity.Doctor;
import com.docnct.service.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("doctors")
@CrossOrigin(origins = "http://localhost:4200")
public class DoctorController {

    @Autowired
    DoctorService doctorService;
    @GetMapping(value = "findAllDoctors", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Doctor> findAllDoctors(){
        return doctorService.findAllDoctors();
    }
}
