import { Component, OnInit } from '@angular/core';
import { ToggleComponentsService } from 'src/app/services/toggle-components.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(public toggleComponent: ToggleComponentsService) {}

  ngOnInit(): void {}

  logoClickNavbar() {
    this.toggleComponent.logoClickNavbar();
  }
}
