import { Component, OnInit } from '@angular/core';
import { ToggleComponentsService } from 'src/app/services/toggle-components.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(public toggleComponent: ToggleComponentsService) {}

  ngOnInit(): void {
    this.toggleComponent.showHeader();
    this.toggleComponent.showSpecialties();
  }
}
