import { Doctor } from './../../models/doctor';
import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-call',
  templateUrl: './call.component.html',
  styleUrls: ['./call.component.css'],
})
export class CallComponent implements OnInit {
  doctor!: Doctor;
  constructor(private doctorService: DoctorService) {}

  ngOnInit(): void {
    this.doctorService.getDoctor().subscribe((doctor) => {
      this.doctor = doctor;
    });
  }
}
