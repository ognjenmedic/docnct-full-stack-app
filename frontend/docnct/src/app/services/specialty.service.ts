import { BehaviorSubject, Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Specialty } from "../models/specialty";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class SpecialtyService {
  baseUrl: string;
  selectedSpecialty: BehaviorSubject<string> | any;
  selectedSpecialty$: Observable<string>;
  constructor(private http: HttpClient) {
    this.baseUrl = environment.apiBaseUrl;
    this.selectedSpecialty = new BehaviorSubject(null);
    this.selectedSpecialty$ = this.selectedSpecialty.asObservable();
  }

  getSpecialties(): Observable<Specialty[]> {
    return this.http.get<Specialty[]>(
      `${this.baseUrl}/specialties/findAllSpecialties`
    );
  }

  updateSelectedSpecialty(specialty: string) {
    this.selectedSpecialty.next(specialty);
  }

  getSelectedSpecialty() {
    return this.selectedSpecialty.asObservable();
  }
}
