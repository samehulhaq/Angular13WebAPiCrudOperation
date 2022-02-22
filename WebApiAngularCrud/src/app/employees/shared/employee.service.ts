import { Injectable } from '@angular/core';
import {Employee} from './employee.model'
 import { HttpClient, HttpResponse, HttpHeaders, HttpRequest } from '@angular/common/http';

 import { catchError, finalize } from 'rxjs/operators';

 import { Observable, throwError,lastValueFrom  } from 'rxjs';
import { EmployeeListComponent } from '../employee-list/employee-list.component';





@Injectable({
  providedIn: 'root'
}) 
export class EmployeeService {
  [x: string]: any;


  selectedEmployee: Employee;
  list!:Employee[];

  constructor(private http : HttpClient) { 
    this.selectedEmployee= new Employee();

  }



    postEmployee(emp: Employee)  {
  
  //     let obj:object={
  //       EmployeeId:0,
  //       FirstName :"1",
  //       LastName :"1",
  //       EmpCode :"1",
  //       Position :"1",
  //       Office :"1",  
  //  }
      
      debugger
    alert("post function call");
      return this.http.post('https://localhost:44323/api/Emp_tb', emp);
    }
    
  //  refreshList():Observable<Employee[]>{
  //    debugger
  //   return  this.http.get<Employee[]>('https://localhost:44323/api/Emp_tb');
  

  // }


 refreshList(){
   
    return this.http.get('https://localhost:44323/api/Emp_tb/').toPromise().then(res=>this.list=res as Employee[]);
}
putEmployee(formData : Employee){
  debugger
  return this.http.put('https://localhost:44323/api/Emp_tb/'+formData.EmployeeId,formData);
   
 }

 deleteEmployee(id : number){
  return this.http.delete('https://localhost:44323/api/Emp_tb/'+id);
 }
}
