import { ToggleComponentsService } from "src/app/services/toggle-components.service";
import { Doctor } from "./../../models/doctor";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DoctorService } from "src/app/services/doctor.service";

@Component({
  selector: "app-call",
  templateUrl: "./call.component.html",
  styleUrls: ["./call.component.css"],
})
export class CallComponent implements OnInit {
  doctor!: Doctor;
  constructor(
    private doctorService: DoctorService,
    private route: ActivatedRoute,
    private toggleComponentService: ToggleComponentsService
  ) {}

  ngOnInit(): void {
    const doctorId = this.route.snapshot.params["did"];
    this.fetchDoctor(doctorId);

  }

  fetchDoctor(doctorId: number) {
    this.doctorService.getDoctorById(doctorId).subscribe((data) => {
      this.doctor = data;
    });
  }
}
