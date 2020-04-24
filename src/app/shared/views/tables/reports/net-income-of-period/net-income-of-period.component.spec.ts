import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetIncomeOfPeriodComponent } from './net-income-of-period.component';

describe('NetIncomeOfPeriodComponent', () => {
  let component: NetIncomeOfPeriodComponent;
  let fixture: ComponentFixture<NetIncomeOfPeriodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetIncomeOfPeriodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetIncomeOfPeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
