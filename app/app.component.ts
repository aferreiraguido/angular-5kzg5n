import { Component } from '@angular/core';
import { EmployeeFlat, employees_flat } from './employee_flat';

@Component({
  selector: 'my-app',
  //templateUrl: './employee.html',
  templateUrl: './employee_flat.html',
})
export class AppComponent {
  public data: EmployeeFlat[] = employees_flat;
}
