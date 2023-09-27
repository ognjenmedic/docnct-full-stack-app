import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowMoreNavbarComponent } from './know-more-navbar.component';

describe('KnowMoreNavbarComponent', () => {
  let component: KnowMoreNavbarComponent;
  let fixture: ComponentFixture<KnowMoreNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnowMoreNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KnowMoreNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
