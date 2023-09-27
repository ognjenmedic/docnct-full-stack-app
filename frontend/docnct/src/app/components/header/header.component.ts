import { Component, OnInit } from '@angular/core';
import { ToggleComponentsService } from 'src/app/services/toggle-components.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(public toggleComponent: ToggleComponentsService) {}

  ngOnInit(): void {}
}
