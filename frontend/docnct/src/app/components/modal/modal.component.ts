import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.css"],
})
export class ModalComponent implements OnInit {
  public showMenu: boolean;

  constructor() {
    this.showMenu = false;
  }

  ngOnInit(): void {}

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
