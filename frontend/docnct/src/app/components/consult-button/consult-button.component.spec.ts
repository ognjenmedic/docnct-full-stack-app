import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultButtonComponent } from './consult-button.component';

describe('ConsultButtonComponent', () => {
  let component: ConsultButtonComponent;
  let fixture: ComponentFixture<ConsultButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
