import { Component, OnInit, Input } from '@angular/core';
import { SortServiceService } from '../../shared/services/sort-service.service';
import * as moment from 'moment';
import { dataTypes } from '../../constants/constants';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'lib-aspire-datatable',
  templateUrl: './aspire-datatable.component.html',
  styleUrls: ['./aspire-datatable.component.css']
})
export class AspireDatatableComponent implements OnInit {
  @Input() headers: any[] = [];
  @Input() records: any[] = [];
  @Input() tableStyle: string = 'table table-striped table-bordered';
  @Input() headerStyle: string = 'thead-light';
  @Input() tableDiv: string = 'table-responsive-md';
  @Input() tableRowStyle: string = '';
  @Input() tableDataStyle: string = '';
  @Input() collectionSize: number;
  @Input() pageSize: number;
  @Input() page: number;
  @Input() ellipses: boolean;
  @Input() maxSize: number;
  @Input() directionLinks: boolean;
  @Input() boundaryLinks: boolean;
  @Input() allowSorting: boolean;
  @Input() dateFormat: string;
  
  searchForm = this.formBuilder.group({
    search: [null],
  });

  // @Input() paginationClass: string = 'd-flex justify-content-end';
  // @Input() ariaLabel: string = 'Default pagination';
  constructor(private sortServiceService: SortServiceService,
    private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.filterDate();
    this.checkSearch();
  }
  getRowSpan(){
    return this.headers.length;
  } 

  sort(item, event){
    this.records = this.sortServiceService.sorting(item.field,this.records,event,item.type);
  }

  filterDate(){
    if(this.headers){
      this.headers.forEach(header => {
        if(header.type === dataTypes.date){
          this.records.forEach(element => {
            var date = moment(new Date(element.date)).format(this.dateFormat)
            element[header.type] = date
          });
        }
      });
    }
  }

  checkSearch(){
    this.searchForm = this.formBuilder.group({
      search: [''],
    }); 
  }

  search(){
    var searchItem = this.searchForm.value.search;
    // console.warn(this.searchForm.value.search)
    this.records.forEach(record => {
      this.headers.forEach(header =>{
        // console.warn(searchItem)
        if(record[header.field] === searchItem){
          console.warn(record)
        }
      });
    });
  }

}
