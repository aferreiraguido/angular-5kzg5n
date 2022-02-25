import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <kendo-treelist
            employeesBinding
            [height]="400"
            kendoTreeListExpandable
          >
          <kendo-treelist-column [expandable]="true" title="Name" [width]="400">
              <ng-template kendoTreeListCellTemplate let-dataItem>
                  {{ dataItem.FirstName }} {{ dataItem.LastName }}
                  <button *ngIf="!dataItem.hasChildren" style="float: right">Detalle</button>
              </ng-template>
          </kendo-treelist-column>
          <kendo-treelist-column field="Position" title="Consistencias" [width]="180">
            <ng-template kendoTreeListCellTemplate let-i>{{i.hasChildren ? "" : i.Position}}</ng-template>
          </kendo-treelist-column>
          <kendo-treelist-column field="Extension" title="Operaciones" [width]="180">
            <ng-template kendoTreeListCellTemplate let-i>{{i.hasChildren ? "" : i.Position}}</ng-template>
          </kendo-treelist-column>
        </kendo-treelist>
    `
})
export class AppComponent {}
