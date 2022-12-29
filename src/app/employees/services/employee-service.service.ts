import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Employees } from "../Employee";



@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
 
  EmployeeListUrl = "http://localhost:3000/Employees"

  constructor(private http:HttpClient) { }

  getEmployeeDetails(){
   return this.http.get<any>(this.EmployeeListUrl)
  }

  AddEmployeeData<Type>(data:Type){
    return this.http.post(this.EmployeeListUrl,data)
  }
  EditEmployee<Type>(id: string,data:Type){
    return this.http.put(`${this.EmployeeListUrl}/${id}`,data)
  }
  DeleteEmployeeData<Type>(id: Type){
    return this.http.delete(`${this.EmployeeListUrl}/${id}`)
  }

}