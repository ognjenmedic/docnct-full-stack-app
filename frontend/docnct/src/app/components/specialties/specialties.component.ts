import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Specialty } from "src/app/models/specialty";
import { SpecialtyService } from "src/app/services/specialty.service";
import { ToggleComponentsService } from "src/app/services/toggle-components.service";
import { SPECIALTIES } from "src/db-data";

@Component({
  selector: "app-specialties",
  templateUrl: "./specialties.component.html",
  styleUrls: ["./specialties.component.css"],
})
export class SpecialtiesComponent implements OnInit {
  specialty: string;
  specialties: Specialty[];
  constructor(
    public toggleComponent: ToggleComponentsService,
    private router: Router,
    private specialtyService: SpecialtyService
  ) {
    this.specialty = "";
    this.specialties = [];
  }

  ngOnInit(): void {
    this.specialtyService
      .getSpecialties()
      .subscribe(
        (specialties: Specialty[]) => (this.specialties = specialties)
      );
  }

  selectSpecialty(specialty: string) {
    this.specialtyService.updateSelectedSpecialty(specialty);
    this.router.navigate(["/doctor-card", specialty]);
  }
}
