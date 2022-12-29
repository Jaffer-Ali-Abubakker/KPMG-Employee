import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { Employees } from '../Employee';
import { EmployeeServiceService } from '../services/employee-service.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';
import { tap } from 'rxjs';
import { DataUpdateServiceService } from "../services/data-update-service.service";
import { ToastrService } from 'ngx-toastr';
import { deleteConfirmationAlert } from "../sweet-alert-messages";



@Component({
  selector: 'kpmg-employees-employee-base',
  templateUrl: './employee-base.component.html',
  styleUrls: ['./employee-base.component.scss'],
})
export class EmployeeBaseComponent implements OnInit {

  EmployeeDetails: Employees[] = []
  constructor(private EmployeeService: EmployeeServiceService,
    public dialog: MatDialog,
    private DataUpdateServiceService: DataUpdateServiceService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.EmployeeService.getEmployeeDetails().subscribe((res => {
      this.EmployeeDetails = res
    }))
    this.DataUpdateServiceService.dataUpdate$.subscribe(() => {
      this.ngOnInit()
    })
  }

  OpenAddBox() {
    this.dialog.open(EmployeeFormComponent, {
    })
  }

  EditEmployee<Type>(event: Type) {
    this.dialog.open(EmployeeFormComponent, {
      data: event
    })
  }

  DeleteEmployee<Type>(id: Type) {
    deleteConfirmationAlert().then((result) => {
      if (result.value) {
        this.EmployeeService.DeleteEmployeeData(id).pipe(tap((res) => {
          this.toastr.warning('', 'DELETED')
          this.ngOnInit()
        })).subscribe()
      }
    })
  }
}
