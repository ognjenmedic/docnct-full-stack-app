import { ActivatedRoute } from "@angular/router";
import { Component, Input, OnInit } from "@angular/core";
import { EventEmitter, Output } from "@angular/core";
import { Doctor } from "src/app/models/doctor";
import { DoctorService } from "src/app/services/doctor.service";

@Component({
  selector: "app-doctor-details",
  templateUrl: "./doctor-details.component.html",
  styleUrls: ["./doctor-details.component.css"],
})
export class DoctorDetailsComponent implements OnInit {
  linkText: string;
  @Input()
  doctor!: Doctor;
  @Output()
  moreInfoClicked = new EventEmitter<void>();

  showMoreInfo: boolean;

  // howItWorksEnabled = true;

  constructor(
    private doctorService: DoctorService,
    private route: ActivatedRoute
  ) {
    this.showMoreInfo = false;
    this.linkText = "Know More";
  }

  ngOnInit(): void {
    const doctorId = +(this.route.snapshot.paramMap.get("id") ?? 0);
    this.getDoctorById(doctorId);
  }

  getDoctorById(doctorId: number) {
    this.doctorService
      .getDoctorById(doctorId)
      .subscribe((doctor) => (this.doctor = doctor));
  }

  onMoreInfoClicked() {
    this.moreInfoClicked.emit();
    this.linkText === "Know More"
      ? (this.linkText = "How It Works")
      : (this.linkText = "Know More");
  }
}
