import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTable} from '@angular/material';
import {DataServiceService} from '../data-service.service';
import {ICustomer} from '../interfaces/ICustomer';
import {MatDialog} from '@angular/material/dialog';
import { AddCustomerModalComponent } from '../add-customer-modal/add-customer-modal.component';

@Component({
  selector: 'app-customer-data-table',
  templateUrl: './customer-data-table.component.html',
  styleUrls: ['./customer-data-table.component.css']
})
export class CustomerDataTableComponent implements OnInit, ICustomer {

  displayedColumns: string[] = ['firstName', 'lastName'];
  dataSource: ICustomer[] = [];

  firstName: string;
  lastName: string;

  // needed to update the data in the table after adding new customers
  @ViewChild(MatTable, {static: false}) table: MatTable<any>;

  constructor(private customerService: DataServiceService, public dialog: MatDialog) { }

  numEmployees() {
    return this.dataSource.length;
  }
// this handles the dialog open/close events
  openDialog(): void {
    const dialogRef = this.dialog.open(AddCustomerModalComponent, {
      width: '30%',
      data: {firstName: this.firstName, lastName: this.lastName}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        this.customerService.addCustomers(result);
        // need to refresh the table rows
        this.refresh();
      }
    });
  }
  // refreshes the table rows
  refresh() {
    this.table.renderRows();
  }

  // subscribe to the dataService to connect to the customer list.
  ngOnInit() {
    const customersObservable = this.customerService.getCustomers();
    customersObservable.subscribe((customersData: ICustomer[]) => {
      this.dataSource = customersData;
    });
  }
}
