import { HttpClient } from "@angular/common/http";
import { Doctor } from "./../models/doctor";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class DoctorService {
  public doctor: BehaviorSubject<Doctor> | any;
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.doctor = new BehaviorSubject(null);
    this.baseUrl = `${environment.apiBaseUrl}/doctors`;
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
    const url = `${this.baseUrl}/findDoctorById?id=${doctorId}`;
    console.log("Fetching doctor from:", url);
    return this.http.get<Doctor>(url);
  }
}
