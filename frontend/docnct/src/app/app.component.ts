import { Component, OnDestroy, OnInit } from "@angular/core";
import { ToggleComponentsService } from "./services/toggle-components.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit, OnDestroy {
  title = "mydoc";

  constructor(public toggleComponent: ToggleComponentsService) {}

  ngOnInit(): void {
    this.toggleComponent.showHeader();
    this.toggleComponent.showSpecialties();
  }

  ngOnDestroy(): void {
    this.toggleComponent.hideHeader();
    this.toggleComponent.hideSpecialties();
  }
}
