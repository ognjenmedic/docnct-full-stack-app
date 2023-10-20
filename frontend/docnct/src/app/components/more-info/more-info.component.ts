import { Doctor } from "./../../models/doctor";
import { Component, Input, OnInit } from "@angular/core";
import { DoctorService } from "src/app/services/doctor.service";

@Component({
  selector: "app-more-info",
  templateUrl: "./more-info.component.html",
  styleUrls: ["./more-info.component.css"],
})
export class MoreInfoComponent implements OnInit {
  @Input()
  doctor!: Doctor;
  constructor(private doctorService: DoctorService) {}

  ngOnInit(): void {}
}
