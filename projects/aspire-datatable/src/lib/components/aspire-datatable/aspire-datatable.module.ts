import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AspireDatatableComponent } from './aspire-datatable.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AspireDatatableComponent],
  imports: [
    CommonModule,
    NgbPaginationModule
  ],
  exports: [AspireDatatableComponent]
})
export class AspireDatatableModule { }
