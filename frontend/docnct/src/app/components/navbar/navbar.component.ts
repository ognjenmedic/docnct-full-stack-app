import { Component, OnInit } from "@angular/core";
import { ToggleComponentsService } from "src/app/services/toggle-components.service";
import { SlideInAnimation } from "src/app/shared/slide-in.animation";
import { ViewChild } from "@angular/core";
import { ModalComponent } from "../modal/modal.component";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
  animations: [SlideInAnimation],
})
export class NavbarComponent implements OnInit {
  @ViewChild(ModalComponent, { static: false }) modalComponent!: ModalComponent;
  public showMenu: boolean;

  constructor(public toggleComponent: ToggleComponentsService) {
    this.showMenu = false;
  }

  ngOnInit(): void {}

  logoClickNavbar() {
    this.toggleComponent.logoClickNavbar();
  }

  toggleMenu() {
    if (this.showMenu) {
      // Assuming you have a reference to the modal component
      this.modalComponent.startExitAnimation();
    } else {
      this.showMenu = true;
    }
  }

  // This method will be called when the modal's exit animation is done
  closeModal() {
    this.showMenu = false;
  }
}
