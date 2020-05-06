import { Component, OnInit } from '@angular/core';
import { records } from '../../helper/table-record';

@Component({
  selector: 'app-datatable-basic',
  templateUrl: './datatable-basic.component.html',
  styleUrls: ['./datatable-basic.component.scss']
})
export class DatatableBasicComponent implements OnInit {
  headers: any[] = [];
  data: any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.initSampleData();
  }

  initSampleData = () => {
    this.headers = ['name', 'address', 'mobile', 'balance', 'email', 'isActive' ];
    this.data = records.map((item, index) => ({
      name: `${item.name.first} ${item.name.last}`,
      address: item.address,
      mobile: item.phone,
      balance: item.balance,
      email: item.email,
      isActive: item.isActive
    })
    );
  }
}
