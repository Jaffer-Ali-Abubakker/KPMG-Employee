import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {  MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { tap } from 'rxjs';
import { EmployeeServiceService } from '../services/employee-service.service';

@Component({
  selector: 'kpmg-employees-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
})
export class EmployeeFormComponent implements OnInit {
  EmployeeList!: FormGroup
  HeaderName: string = '';
  isChange: boolean = true
  constructor(
    private formBuilder: FormBuilder,
    private EmployeeService: EmployeeServiceService,
    @Inject(MAT_DIALOG_DATA) public dialogData: any,
    public dialogRef: MatDialogRef<EmployeeFormComponent>
  ) { }

  ngOnInit(): void {
    this.FormDetails()
    this.setTitleHeader()
    this.patchEmployeeForm()
  }

  Save<T>(event: T) {
    if (this.EmployeeList.invalid) {
      return;
    }
    this.EmployeeService.AddEmployeeData(event).subscribe((Response => {
      this.dialogRef.close()
    }))
    location.reload()
  }

  FormDetails() {
    this.EmployeeList = this.formBuilder.group({
      id:[''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      jobTitleName: ['', Validators.required],
      employeeCode: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      emailAddress: ['', Validators.required]
    })
  }

  setTitleHeader() {
    if (this.dialogData == null) {
      this.HeaderName = 'Add Employee'
    } else {
      this.HeaderName = 'Edit Employee'
    }
  }

  patchEmployeeForm(){
    if(this.dialogData == null){
      return 
    } else {
      this.EmployeeList?.patchValue ({
        id: this.dialogData?.id,
        firstName: this.dialogData?.firstName,
        lastName: this.dialogData?.lastName,
        jobTitleName: this.dialogData?.jobTitleName,
        employeeCode: this.dialogData?.employeeCode,
        phoneNumber: this.dialogData?.phoneNumber,
        emailAddress: this.dialogData?.emailAddress
      })
    }
  }
  UpdateEmployee<Type>(id: any ,event:Type){
    this.EmployeeService.EditEmployee(id,event).pipe(tap(() =>{
      this.dialogRef.close()
    })).subscribe()
    location.reload()
  }
  checkChanges(){
    this.isChange = false;

  }
}
