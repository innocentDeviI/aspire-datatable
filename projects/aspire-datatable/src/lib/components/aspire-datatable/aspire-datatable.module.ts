import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AspireDatatableComponent } from './aspire-datatable.component';
import { AspirePaginationModule } from '../aspire-pagination/aspire-pagination.module';

@NgModule({
  declarations: [AspireDatatableComponent],
  imports: [
    CommonModule,
    AspirePaginationModule
  ],
  exports: [AspireDatatableComponent]
})
export class AspireDatatableModule { }
