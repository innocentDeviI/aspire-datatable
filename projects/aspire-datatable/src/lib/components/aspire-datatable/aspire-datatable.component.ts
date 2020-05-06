import { Component, OnInit, Input } from '@angular/core';

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
  // @Input() paginationClass: string = 'd-flex justify-content-end';
  // @Input() ariaLabel: string = 'Default pagination';
  constructor() { }

  ngOnInit(): void {
  }
  getRowSpan(){
    return this.headers.length;
  }
}
