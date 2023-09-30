import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Doctor } from "src/app/models/doctor";
import { DoctorService } from "src/app/services/doctor.service";

@Component({
  selector: "app-doctor-info",
  templateUrl: "./doctor-info.component.html",
  styleUrls: ["./doctor-info.component.css"],
})
export class DoctorInfoComponent implements OnInit {
  doctor!: Doctor;
  howItWorksEnabled = true;

  constructor(
    private route: ActivatedRoute,
    private doctorService: DoctorService
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.params;
    const doctorIdFromRoute = Number(routeParams["id"]);
    this.fetchDoctor(doctorIdFromRoute);
  }

  fetchDoctor(doctorId: number) {
    this.doctorService.getDoctorById(doctorId).subscribe((data: any) => {
      this.doctor = data;
    });
  }

  toggleMoreInfo() {
    this.howItWorksEnabled = !this.howItWorksEnabled;
  }
}
