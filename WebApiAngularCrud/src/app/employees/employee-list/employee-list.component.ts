import { Component, OnInit } from '@angular/core';
import { Employee } from '../shared/employee.model';
import { EmployeeService } from '../shared/employee.service';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  
  selectedEmployee: Employee;
//public employee=[];
  constructor(public employeeService:EmployeeService) { 
    this.selectedEmployee= new Employee();


  }

  ngOnInit(): void {

    this.employeeService.refreshList();
  }

  populateForm(emp:Employee){

    // this.employeeService.selectedEmployee=emp;
    this.employeeService.selectedEmployee=Object.assign({},emp);



  }

  onDelete(id:number){

this.employeeService.deleteEmployee(id).subscribe(res=>{
  this.employeeService.refreshList();
  
  alert("REcord Deleted Successfully  ");
})
     
  }

}
