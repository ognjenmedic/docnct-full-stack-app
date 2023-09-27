import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-info',
  templateUrl: './doctor-info.component.html',
  styleUrls: ['./doctor-info.component.css'],
})
export class DoctorInfoComponent implements OnInit {
  howItWorksEnabled = true;

  constructor() {}

  ngOnInit(): void {}

  toggleMoreInfo() {
    this.howItWorksEnabled = !this.howItWorksEnabled;
  }
}
