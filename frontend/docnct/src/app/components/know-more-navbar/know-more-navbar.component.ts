import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SpecialtyService } from "src/app/services/specialty.service";
import { SlideInAnimation } from "src/app/shared/slide-in.animation";

@Component({
  selector: "app-know-more-navbar",
  templateUrl: "./know-more-navbar.component.html",
  styleUrls: ["./know-more-navbar.component.css"],
  animations: [SlideInAnimation],
})
export class KnowMoreNavbarComponent implements OnInit {
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
    this.showMenu = !this.showMenu;
  }
}
