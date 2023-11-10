import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SpecialtyService } from "src/app/services/specialty.service";
import { SlideInAnimation } from "src/app/shared/slide-in.animation";
import { ViewChild } from "@angular/core";
import { ModalComponent } from "../modal/modal.component";

@Component({
  selector: "app-know-more-navbar",
  templateUrl: "./know-more-navbar.component.html",
  styleUrls: ["./know-more-navbar.component.css"],
  animations: [SlideInAnimation],
})
export class KnowMoreNavbarComponent implements OnInit {
  @ViewChild(ModalComponent, { static: false }) modalComponent!: ModalComponent;

  public showMenu: boolean;
  constructor(
    private router: Router,
    private specialtyService: SpecialtyService
  ) {
    this.showMenu = false;
  }

  ngOnInit(): void {}

  onBackButtonClick() {
    this.specialtyService
      .getSelectedSpecialty()
      .subscribe((specialty: any) =>
        this.router.navigate(["doctor-card", specialty])
      );
  }

  toggleMenu() {
    if (this.showMenu) {
      this.modalComponent.startExitAnimation();
    } else {
      this.showMenu = true;
    }
  }

  closeModal() {
    this.showMenu = false;
  }
}
