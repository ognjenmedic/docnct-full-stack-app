import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBottomSectionComponent } from './modal-bottom-section.component';

describe('ModalBottomSectionComponent', () => {
  let component: ModalBottomSectionComponent;
  let fixture: ComponentFixture<ModalBottomSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalBottomSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalBottomSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
