import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SpecialtyService {
  selectedSpecialty: BehaviorSubject<string> | any;
  selectedSpecialty$: Observable<string>;
  constructor() {
    this.selectedSpecialty = new BehaviorSubject(null);
    this.selectedSpecialty$ = this.selectedSpecialty.asObservable();
  }

  updateSelectedSpecialty(specialty: string) {
    this.selectedSpecialty.next(specialty);
  }

  getSelectedSpecialty() {
    return this.selectedSpecialty.asObservable();
  }
}
