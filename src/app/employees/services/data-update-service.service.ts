import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataUpdateServiceService {

  private dataUpdateSubject = new Subject<void>();
  dataUpdate$ = this.dataUpdateSubject.asObservable();

  constructor() { }

  updateData(){
    this.dataUpdateSubject.next();
  }
}
