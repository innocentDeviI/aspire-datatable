import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PageRequest } from '../aspire-datatable/aspire-datatable.model';
import { Page } from '../aspire-pagination/aspire-pagination.model';
@Component({
  selector: 'aspire-datatable',
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
  @Input() totalItems: number = 0;
  @Input() maxVisiblePage: number = 10;
  @Input() itemsPerPage: number = 10;
  @Input() paginationStyle: string = '';
  @Input() pageItemStyle: string = 'page-item';
  @Input() pageLinkStyle: string = 'page-link';

  @Input() firstPageText: any;
  @Input() prevPageText: any;
  @Input() nextPageText: any;
  @Input() lastPageText: any;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onPageChange: EventEmitter<PageRequest> = new EventEmitter<PageRequest>();
  public payload = new Page();
  public pageRequest = new PageRequest();
  page: number;
  pageSize: number;
  constructor() { }

  ngOnInit(): void {
    this.page = 1;
    this.pageSize = this.itemsPerPage;
  }

  getRowSpan(){
    return this.headers.length;
  }

  onPageChanged(event: Page): void {
    this.page = event.currentPage;
    this.pageSize = this.itemsPerPage;
  }
}
