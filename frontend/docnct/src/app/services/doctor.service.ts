import { HttpClient } from "@angular/common/http";
import { Doctor } from "./../models/doctor";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";
import { DOCTORS } from "src/db-data";

@Injectable({
  providedIn: "root",
})
export class DoctorService {
  public doctor: BehaviorSubject<Doctor> | any;
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.doctor = new BehaviorSubject(null);
    this.baseUrl = "http://localhost:8080/doctors";
  }

  getDoctorsBySpecialty(specialty: string): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(
      `${this.baseUrl}/findBySpecialty?specialty=${specialty}`
    );
  }

  setDoctor(clickedDoctor: Doctor) {
    this.doctor.next(clickedDoctor);
  }

  getDoctor(): Observable<Doctor> {
    return this.doctor.asObservable();
  }

  getDoctorById(doctorId: number): Observable<Doctor> {
    const doctor = DOCTORS.find((doctor: any) => doctor.id === doctorId);
    return of(doctor);
  }
}
