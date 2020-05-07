import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatatableBasicComponent } from './datatable-basic.component';
import { AspireDatatableModule } from 'aspire-datatable';
import { AspirePaginationModule } from 'aspire-datatable';

@NgModule({
  declarations: [DatatableBasicComponent],
  imports: [
    CommonModule,
    AspireDatatableModule,
    AspirePaginationModule
  ],
  exports: [DatatableBasicComponent]
})
export class DatatableBasicModule { }
