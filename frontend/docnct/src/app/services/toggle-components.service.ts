import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToggleComponentsService {
  headerVisible!: Boolean;
  specialtiesVisible!: Boolean;
  navbarVisible: Boolean;
  doctorCardVisible: Boolean;
  knowMoreVisible: Boolean;
  knowMoreNavbarVisible: Boolean;
  doctorDetailsVisible: Boolean;
  howItWorksVisible: Boolean;

  constructor() {
    // this.headerVisible = false;
    // this.specialtiesVisible = false;
    this.navbarVisible = false;
    this.doctorCardVisible = false;
    this.knowMoreVisible = false;
    this.knowMoreNavbarVisible = false;
    this.doctorDetailsVisible = false;
    this.howItWorksVisible = false;
  }

  showHeader() {
    this.headerVisible = true;
  }

  hideHeader() {
    this.headerVisible = false;
  }

  showSpecialties() {
    this.specialtiesVisible = true;
  }

  hideSpecialties() {
    this.specialtiesVisible = false;
  }

  showNavbar() {
    this.navbarVisible = true;
  }

  hideNavbar() {
    this.navbarVisible = false;
  }

  showDoctorCard() {
    this.doctorCardVisible = true;
  }

  hideDoctorCard() {
    this.doctorCardVisible = false;
  }

  showKnowMore() {
    this.knowMoreVisible = true;
  }

  hideKnowMore() {
    this.knowMoreVisible = false;
  }

  showKnowMoreNavbar() {
    this.knowMoreNavbarVisible = true;
  }

  hideKnowMoreNavbar() {
    this.knowMoreNavbarVisible = false;
  }

  showDoctorDetails() {
    this.doctorDetailsVisible = true;
  }

  hideDoctorDetails() {
    this.doctorDetailsVisible = false;
  }

  showHowItWorks() {
    this.howItWorksVisible = true;
  }

  hideHowItWorks() {
    this.howItWorksVisible = false;
  }

  toggleDoctorMoreInfo() {}

  logoClickNavbar() {
    // this.showHeader();
    // this.showSpecialties();
    this.hideNavbar();
    this.hideDoctorCard();
  }
}
