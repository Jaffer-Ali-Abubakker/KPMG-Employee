import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeBaseComponent } from './employee-base.component';

describe('EmployeeBaseComponent', () => {
  let component: EmployeeBaseComponent;
  let fixture: ComponentFixture<EmployeeBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeeBaseComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EmployeeBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
