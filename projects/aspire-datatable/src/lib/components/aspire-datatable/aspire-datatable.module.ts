import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AspireDatatableComponent } from './aspire-datatable.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchFilterPipe } from '../../shared/pipes/search-filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AspireDatatableComponent,
    SearchFilterPipe
  ],
  imports: [
    CommonModule,
    NgbPaginationModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    AspireDatatableComponent
  ]
})
export class AspireDatatableModule { }
