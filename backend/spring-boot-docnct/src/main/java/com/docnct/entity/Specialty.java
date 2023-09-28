package com.docnct.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "specialty")
public class Specialty {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long cid;
    @Column(name = "specialty")
    private String specialty;
    @Column(name = "image")
    private String image;

    public Long getCid() {
        return cid;
    }

    public void setCid(Long cid) {
        this.cid = cid;
    }

    public String getSpecialty() {
        return specialty;
    }

    public void setSpecialty(String specialty) {
        this.specialty = specialty;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Specialty(Long cid, String specialty, String image) {
        this.cid = cid;
        this.specialty = specialty;
        this.image = image;
    }

    public Specialty() {
    }

    @Override
    public String toString() {
        return "Specialty{" +
                "cid=" + cid +
                ", specialty='" + specialty + '\'' +
                ", image='" + image + '\'' +
                '}';
    }
}
