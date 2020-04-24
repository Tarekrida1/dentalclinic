import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorSummaryComponent } from './doctor-summary.component';

describe('DoctorSummaryComponent', () => {
  let component: DoctorSummaryComponent;
  let fixture: ComponentFixture<DoctorSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
