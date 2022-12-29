import { Component, Inject, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {  MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { tap } from 'rxjs';
import { EmployeeServiceService } from '../services/employee-service.service';
import { ToastrService } from 'ngx-toastr';
import { DataUpdateServiceService } from "../services/data-update-service.service";
@Component({
  selector: 'kpmg-employees-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
})
export class EmployeeFormComponent implements OnInit {
  EmployeeList!: FormGroup
  HeaderName: string = '';
  isChange: boolean = true
  @Output() reloadEvent = new EventEmitter<void>();
  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private DataUpdateServiceService:DataUpdateServiceService,
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
      this.toastr.success('New Employee is Added','Success')
      this.DataUpdateServiceService.updateData()
    }))
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
      this.DataUpdateServiceService.updateData()
      this.toastr.success('The Employee Details Updated','Updated')
    })).subscribe()
    
  }
}
