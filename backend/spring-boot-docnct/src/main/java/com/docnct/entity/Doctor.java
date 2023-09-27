package com.docnct.entity;




import jakarta.persistence.*;

import java.math.BigDecimal;
@Entity
@Table(name = "doctor")
public class Doctor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "did")
    private Long did;
    @Column(name = "name")
    private String name;
    @Column(name = "doctor_image")
    private String doctorImage;
    @Column(name = "qualifications")
    private String qualifications;
    @Column(name = "specialty")
    private String specialty;
    @Column(name = "languages")
    private String languages;
    @Column(name = "price")
    private BigDecimal price;
    @Column(name = "years_experience")
    private int yearsExperience;
    @Column(name = "hospital")
    private String hospital;
    @Column(name = "logo_hospital")
    private String logoHospital;
    @Column(name = "location")
    private String location;
    @Column(name = "degree_obtained_1")
    private String degreeObtained1;
    @Column(name = "university_1")
    private String university1;
    @Column(name = "degree_obtained_2")
    private String degreeObtained2;
    @Column(name = "university_2")
    private String university2;

    public Long getDid() {
        return did;
    }

    public void setDid(Long did) {
        this.did = did;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDoctorImage() {
        return doctorImage;
    }

    public void setDoctorImage(String doctorImage) {
        this.doctorImage = doctorImage;
    }

    public String getQualifications() {
        return qualifications;
    }

    public void setQualifications(String qualifications) {
        this.qualifications = qualifications;
    }

    public String getSpecialty() {
        return specialty;
    }

    public void setSpecialty(String specialty) {
        this.specialty = specialty;
    }

    public String getLanguages() {
        return languages;
    }

    public void setLanguages(String languages) {
        this.languages = languages;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public int getYearsExperience() {
        return yearsExperience;
    }

    public void setYearsExperience(int yearsExperience) {
        this.yearsExperience = yearsExperience;
    }

    public String getHospital() {
        return hospital;
    }

    public void setHospital(String hospital) {
        this.hospital = hospital;
    }

    public String getLogoHospital() {
        return logoHospital;
    }

    public void setLogoHospital(String logoHospital) {
        this.logoHospital = logoHospital;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getDegreeObtained1() {
        return degreeObtained1;
    }

    public void setDegreeObtained1(String degreeObtained1) {
        this.degreeObtained1 = degreeObtained1;
    }

    public String getUniversity1() {
        return university1;
    }

    public void setUniversity1(String university1) {
        this.university1 = university1;
    }

    public String getDegreeObtained2() {
        return degreeObtained2;
    }

    public void setDegreeObtained2(String degreeObtained2) {
        this.degreeObtained2 = degreeObtained2;
    }

    public String getUniversity2() {
        return university2;
    }

    public void setUniversity2(String university2) {
        this.university2 = university2;
    }

    public Doctor(Long did, String name, String doctorImage, String qualifications, String specialty, String languages, BigDecimal price, int yearsExperience, String hospital, String logoHospital, String location, String degreeObtained1, String university1, String degreeObtained2, String university2) {
        this.did = did;
        this.name = name;
        this.doctorImage = doctorImage;
        this.qualifications = qualifications;
        this.specialty = specialty;
        this.languages = languages;
        this.price = price;
        this.yearsExperience = yearsExperience;
        this.hospital = hospital;
        this.logoHospital = logoHospital;
        this.location = location;
        this.degreeObtained1 = degreeObtained1;
        this.university1 = university1;
        this.degreeObtained2 = degreeObtained2;
        this.university2 = university2;
    }

    public Doctor() {
    }

    @Override
    public String toString() {
        return "Doctor{" +
                "did=" + did +
                ", name='" + name + '\'' +
                ", doctorImage='" + doctorImage + '\'' +
                ", qualifications='" + qualifications + '\'' +
                ", specialty='" + specialty + '\'' +
                ", languages='" + languages + '\'' +
                ", price=" + price +
                ", yearsExperience=" + yearsExperience +
                ", hospital='" + hospital + '\'' +
                ", logoHospital='" + logoHospital + '\'' +
                ", location='" + location + '\'' +
                ", degreeObtained1='" + degreeObtained1 + '\'' +
                ", university1='" + university1 + '\'' +
                ", degreeObtained2='" + degreeObtained2 + '\'' +
                ", university2='" + university2 + '\'' +
                '}';
    }
}
