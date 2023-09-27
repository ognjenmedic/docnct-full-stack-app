import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpecialtyService } from 'src/app/services/specialty.service';

@Component({
  selector: 'app-know-more-navbar',
  templateUrl: './know-more-navbar.component.html',
  styleUrls: ['./know-more-navbar.component.css'],
})
export class KnowMoreNavbarComponent implements OnInit {
  constructor(
    private router: Router,
    private specialtyService: SpecialtyService
  ) {}

  ngOnInit(): void {}

  onBackButtonClick() {
    this.specialtyService
      .getSelectedSpecialty()
      .subscribe((specialty: any) =>
        this.router.navigate(['doctor-card', specialty])
      );
  }
}
