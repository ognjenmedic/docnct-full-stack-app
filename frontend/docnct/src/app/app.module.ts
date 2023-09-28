import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { DoctorCardComponent } from "./components/doctor-card/doctor-card.component";
import { SearchComponent } from "./components/search/search.component";
import { SpecialtiesComponent } from "./components/specialties/specialties.component";
import { StatisticsComponent } from "./components/statistics/statistics.component";
import { HospitalsComponent } from "./components/hospitals/hospitals.component";
import { TestimonialsComponent } from "./components/testimonials/testimonials.component";
import { BlogFeedComponent } from "./components/blog-feed/blog-feed.component";
import { DownloadAppComponent } from "./components/download-app/download-app.component";
import { ToggleComponentsService } from "./services/toggle-components.service";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HowItWorksComponent } from "./components/how-it-works/how-it-works.component";
import { KnowMoreComponent } from "./components/know-more/know-more.component";
import { DoctorDetailsComponent } from "./components/doctor-details/doctor-details.component";
import { KnowMoreNavbarComponent } from "./components/know-more-navbar/know-more-navbar.component";
import { HomeComponent } from "./components/home/home.component";
import { CallComponent } from "./components/call/call.component";
import { MoreInfoComponent } from "./components/more-info/more-info.component";
import { ConsultButtonComponent } from "./components/consult-button/consult-button.component";
import { DoctorService } from "./services/doctor.service";
import { SpecialtyService } from "./services/specialty.service";
import { DoctorInfoComponent } from "./components/doctor-info/doctor-info.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DoctorCardComponent,
    SearchComponent,
    SpecialtiesComponent,
    StatisticsComponent,
    HospitalsComponent,
    TestimonialsComponent,
    BlogFeedComponent,
    DownloadAppComponent,
    NavbarComponent,
    HowItWorksComponent,
    KnowMoreComponent,
    DoctorDetailsComponent,
    KnowMoreNavbarComponent,
    HomeComponent,
    CallComponent,
    MoreInfoComponent,
    ConsultButtonComponent,
    DoctorInfoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [ToggleComponentsService, DoctorService, SpecialtyService],
  bootstrap: [AppComponent],
})
export class AppModule {}
