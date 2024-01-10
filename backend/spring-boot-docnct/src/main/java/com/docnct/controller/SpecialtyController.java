package com.docnct.controller;

import com.docnct.entity.Specialty;
import com.docnct.service.SpecialtyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("specialties")

public class SpecialtyController {
    @Autowired
    SpecialtyService specialtyService;

    @GetMapping(value = "findAllSpecialties", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Specialty> findAllSpecialties() {
        return specialtyService.findAllSpecialties();
    }
}
