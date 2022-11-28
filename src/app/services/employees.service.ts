import { IEmployee } from './../interfaces/IEmployee';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http:HttpClient) { }

  baseURL:string = '/assets/database/'
  filterRoles = new BehaviorSubject({})
  // get all employees
  getEmployees():Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this.baseURL+'employees.json')
  }
  // get departments
  getDepartments():Observable<string[]>{
    return this.http.get<string[]>(this.baseURL+'departments.json')
  }
  // get experiences
  getExperiences():Observable<string[]>{
    return this.http.get<string[]>(this.baseURL+'experiences.json')
  }

  // set filter roles
  setFilterRoles(roles:any){
    this.filterRoles.next(roles)
  }
}
