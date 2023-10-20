import { Component, Input, OnInit } from "@angular/core";
import { Doctor } from "src/app/models/doctor";
import { DoctorService } from "src/app/services/doctor.service";
import { ToggleComponentsService } from "src/app/services/toggle-components.service";

@Component({
  selector: "app-know-more",
  templateUrl: "./know-more.component.html",
  styleUrls: ["./know-more.component.css"],
})
export class KnowMoreComponent implements OnInit {
  @Input()
  doctor!: Doctor;
  selectedDoctor!: Doctor;
  constructor(
    public toggleComponent: ToggleComponentsService,
    private doctorService: DoctorService
  ) {}
  // howItWorksEnabled = true;

  ngOnInit(): void {
    this.toggleComponent.hideHeader();
    this.toggleComponent.hideSpecialties();
    // this.doctorService.getDoctor();
  }

  // toggleMoreInfo() {
  //   this.howItWorksEnabled = !this.howItWorksEnabled;
  // }
}
