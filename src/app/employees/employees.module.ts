import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeBaseComponent } from './employee-base/employee-base.component';
import { EmployeeContainerComponent } from './employee-container/employee-container.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import {MatCardModule} from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    EmployeeBaseComponent,
    EmployeeContainerComponent,
    EmployeeFormComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserModule
  ],
  exports: [EmployeeBaseComponent, EmployeeContainerComponent],
})
export class EmployeesModule {}
