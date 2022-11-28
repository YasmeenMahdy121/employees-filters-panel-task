import { IEmployee } from './../../interfaces/IEmployee';
import { EmployeesService } from './../../services/employees.service';
// import { EmployeesService } from '../../../empl.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-employees',
  templateUrl: './view-employees.component.html',
  styleUrls: ['./view-employees.component.scss']
})
export class ViewEmployeesComponent implements OnInit {

  constructor(private employeesService:EmployeesService, private activatedRoute:ActivatedRoute, private router:Router) { }

  employees:IEmployee[] = []
  filterRoles:any
  ngOnInit(): void {
    // get all employees
    this.employeesService.getEmployees().subscribe((employees)=> this.employees = employees )
    // subscribe changes of filter roles
    this.employeesService.filterRoles.subscribe(roles=>{
      this.filterRoles = roles
      this.updateQueryParams(roles)
    })
  }
  //  update the query params
  updateQueryParams(roles:any){
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: {
        ...roles
      }
    });
  }

}
