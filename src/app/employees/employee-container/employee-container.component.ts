import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Employees } from '../Employee';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'kpmg-employees-employee-container',
  templateUrl: './employee-container.component.html',
  styleUrls: ['./employee-container.component.scss'],
})
export class EmployeeContainerComponent implements OnInit {

@Input() EmployeeData: Employees[] = []
@Output() AddEmployee: EventEmitter<Employees[]> = new EventEmitter<Employees[]>()
@Output() EditEmployee: EventEmitter<Employees[]> = new EventEmitter<Employees[]>()
@Output() DeleteEmployee: EventEmitter<Employees[]> = new EventEmitter<Employees[]>()
displayedColumns: string[] = ['Sr.No', 'firstName', 'lastName', 'jobTitleName', 'employeeCode', 'phoneNumber', 'emailAddress', 'Edit', 'Delete' ];
dataSource = new MatTableDataSource(this.EmployeeData)
  constructor(){}

  ngOnInit(): void { 
  }

  OpenEdit(){
    this.AddEmployee.emit()
  }
}