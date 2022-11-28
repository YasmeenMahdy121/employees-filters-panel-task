import { IEmployee } from './../interfaces/IEmployee';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'employeesFiltration'
})
export class EmployeesFiltrationPipe implements PipeTransform {

  transform(employees: any[], filterRoles: any): IEmployee[] {
    if(!Object.keys(filterRoles).length){
      console.log('if')
      return employees;
    }
    else{
      console.log('else')
      let filteredEmployees = employees.filter(employee=>{
        for (const key in filterRoles) {
          if ((key == 'Name' && !(employee[key]?.toLocaleLowerCase().includes(filterRoles[key].toLocaleLowerCase()))) ||
          (key != 'Name' && employee[key] != filterRoles[key])) {
            return false
          }
        }
        return true
      })
      return filteredEmployees
    }
  }

}
