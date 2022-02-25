import { Directive, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TreeListComponent } from '@progress/kendo-angular-treelist';
import { Employee } from './employee';
import { EmployeesService } from './employees.service';

@Directive({
    selector: '[employeesBinding]'
})
export class EmployeesBindingDirective implements OnInit {
    constructor(
        private service: EmployeesService,
        private treelist: TreeListComponent
    ) {}

    public ngOnInit(): void {
        this.treelist.fetchChildren = this.fetchChildren.bind(this);
        this.treelist.hasChildren = this.hasChildren.bind(this);

        this.treelist.data = this.service.query();
    }

    public fetchChildren = (item: Employee): Observable<Employee[]> => {
        return this.service.query(item.EmployeeId);
    }

    public hasChildren = (item: Employee): boolean => {
        return item.hasChildren;
    }
}
