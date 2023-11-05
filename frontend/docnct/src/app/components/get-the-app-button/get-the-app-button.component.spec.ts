import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTheAppButtonComponent } from './get-the-app-button.component';

describe('GetTheAppButtonComponent', () => {
  let component: GetTheAppButtonComponent;
  let fixture: ComponentFixture<GetTheAppButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetTheAppButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetTheAppButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
