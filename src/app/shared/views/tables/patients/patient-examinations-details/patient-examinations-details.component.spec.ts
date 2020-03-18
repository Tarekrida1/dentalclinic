import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientExaminationsDetailsComponent } from './patient-examinations-details.component';

describe('PatientExaminationsDetailsComponent', () => {
  let component: PatientExaminationsDetailsComponent;
  let fixture: ComponentFixture<PatientExaminationsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientExaminationsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientExaminationsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
