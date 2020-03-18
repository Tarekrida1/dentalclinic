import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPatiantComponent } from './add-patiant.component';

describe('AddPatiantComponent', () => {
  let component: AddPatiantComponent;
  let fixture: ComponentFixture<AddPatiantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPatiantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPatiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
