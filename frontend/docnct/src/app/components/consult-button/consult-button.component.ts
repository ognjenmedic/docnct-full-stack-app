import { Doctor } from './../../models/doctor';
import { Component, Input, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-consult-button',
  templateUrl: './consult-button.component.html',
  styleUrls: ['./consult-button.component.css'],
})
export class ConsultButtonComponent implements OnInit {
  @Input()
  doctor!: Doctor;

  constructor(private doctorService: DoctorService) {}

  ngOnInit(): void {
    // this.doctorService.getDoctor();
    console.log(this.doctor);
  }
}
