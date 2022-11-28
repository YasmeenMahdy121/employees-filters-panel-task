import { EmployeesService } from './../../services/employees.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-filtration',
  templateUrl: './filtration.component.html',
  styleUrls: ['./filtration.component.scss']
})
export class FiltrationComponent implements OnInit {

  constructor(private fb:FormBuilder, private employeesService:EmployeesService) { }

  @Output() closeFiltrationForMe: EventEmitter<any> = new EventEmitter();
  showCloseBtn:boolean = false
  closeFiltration() {
    this.closeFiltrationForMe.emit();
  }

  ngOnInit(): void {
    this.checkScreenWidth()
    this.employeesService.getExperiences().subscribe((experiences)=> this.Experiences = experiences )
    this.employeesService.getDepartments().subscribe((departments)=> this.Departments = departments )
  }

  Experiences:string[] = []
  Departments:string[] = []

  filterForm:any = this.fb.group({
    Name:[''],
    Employment_Date:[''],
    Salary:[''],
    Experience:[''],
    Department:['']
  })

  filter(){
    let roles:any = {}
    for (const key in this.filterForm.value) {
      if(this.filterForm.value[key]){
        roles[key] = this.filterForm.value[key]
      }
    }
    this.employeesService.setFilterRoles(roles)
  }
  clearFilter(){
    this.filterForm.reset()
    this.employeesService.setFilterRoles({})
  }

  checkScreenWidth(){
    if(window.innerWidth <= 912){
      this.showCloseBtn = true
    }
  }

}
