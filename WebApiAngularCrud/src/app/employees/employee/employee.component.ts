import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../shared/employee.model';
import { EmployeeService } from '../shared/employee.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {


  employee:Employee;

  list!: Employee[];
  constructor(public employeeService:EmployeeService) { 
    this.employee =new Employee();
  }
resetForm(form:NgForm){
  //alert("function call");

form.reset();

this.employeeService.selectedEmployee={

     EmployeeId:0,
     FirstName :"",
     LastName :"",
     EmpCode :"",
     Position :"",
     Office :"",  
}

}
  ngOnInit(): void {
  }

//   onSubmit(form: NgForm) {
//     alert("function call");
//     if (form.value.EmployeeID == null) {



//       this.employeeService.postEmployee(form.value)
//         .subscribe(data => {
//          // this.push(Employee)
          
//         })
//     }

// }

onSubmit(form: NgForm) {

   
 if(form.value.EmployeeId==0){
  debugger
  this.inserRecord(form);
 }
  else
  this.updateRecord(form)

}


inserRecord(form:NgForm){

         this.employeeService.postEmployee(this.employeeService.selectedEmployee)
        .subscribe(data => {
         this.resetForm(form);
         this.employeeService.refreshList();
  alert("Record Inserted Successfully");


        })
      }

updateRecord(form: NgForm) {
  debugger
        this.employeeService.putEmployee(this.employeeService.selectedEmployee).subscribe(res => {
          this.resetForm(form);
          this.employeeService.refreshList();
  alert("Record Updated Successfully");

        });
    
      }

}