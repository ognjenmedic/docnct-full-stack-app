package com.docnct.controller;

import org.springframework.web.bind.annotation.RequestParam;
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
@RequestMapping("/api/doctors")
public class DoctorController {

    @Autowired
    DoctorService doctorService;
    @GetMapping(value = "findBySpecialty", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Doctor> findBySpecialty(@RequestParam String specialty){
        return doctorService.findBySpecialty(specialty);
    }

    @GetMapping(value = "findDoctorById")
    public Doctor findDoctorById(@RequestParam("id") Long did) {
        return doctorService.findDoctorById(did);
    }

}
