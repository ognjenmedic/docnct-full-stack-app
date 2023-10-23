import { Component, OnInit } from "@angular/core";
import { ToggleComponentsService } from "src/app/services/toggle-components.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  public showMenu: boolean;

  constructor(public toggleComponent: ToggleComponentsService) {
    this.showMenu = false;
  }

  ngOnInit(): void {}

  logoClickNavbar() {
    this.toggleComponent.logoClickNavbar();
  }

  openModal() {
    this.showMenu = true;
  }

  closeModal() {
    this.showMenu = false;
  }
}
