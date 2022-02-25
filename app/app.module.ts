import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TreeListModule } from '@progress/kendo-angular-treelist';

import { AppComponent } from './app.component';
import { EmployeesBindingDirective } from './employees-binding.directive';
import { EmployeesService } from './employees.service';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        HttpClientJsonpModule,
        TreeListModule
    ],
    declarations: [
        AppComponent,
        EmployeesBindingDirective
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [
        EmployeesService
    ]
})

export class AppModule { }
