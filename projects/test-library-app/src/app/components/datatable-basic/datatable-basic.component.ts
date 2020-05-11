import { Component, OnInit } from '@angular/core';
import { records } from '../../helper/table-record';

@Component({
  selector: 'app-datatable-basic',
  templateUrl: './datatable-basic.component.html',
  styleUrls: ['./datatable-basic.component.scss']
})
export class DatatableBasicComponent implements OnInit {
  tableHeaders: any[] = [];
  tableData: any[] = [];
  totalRecords: number;
  recordsLength: number;
  itemsPerPage: number = 5;
  constructor() { }

  ngOnInit(): void {
    this.initSampleData();
  }

  initSampleData = () => {
    this.tableHeaders = ['name', 'address', 'mobile', 'balance', 'email', 'isActive' ];
    this.tableData = records.map((item, index) => ({
      name: `${item.name.first} ${item.name.last}`,
      address: item.address,
      mobile: item.phone,
      balance: item.balance,
      email: item.email,
      isActive: item.isActive
    })
    );
    this.totalRecords = records.length;
  }

}
