import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Employee } from './employee';

const defaultUrl = 'https://demos.telerik.com/kendo-ui/service/EmployeeDirectory';

@Injectable()
export class EmployeesService {
    private url: string = defaultUrl;

    constructor(
        private http: HttpClient
    ) {}

    public query(reportsTo: number = null): Observable<Employee[]> {
        return this.http.jsonp<Employee[]>(
            `${this.url}?id=${reportsTo}`,
            'callback'
        );
    }
}
