import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {ICustomer} from './interfaces/ICustomer';
import {IDataService} from './interfaces/IDataService';

@Injectable({
  providedIn: 'root'
})

export class DataServiceService implements IDataService {

  customers: ICustomer[] = [
    {
    firstName: 'Ushoud',
    lastName: 'Hireme'
    },
    {firstName: 'Josh',
    lastName: 'Allen'}
];

// get customers from the customer array
public getCustomers(): any {
  const customersObservable = new Observable(observer => {
    setTimeout(() => {
      observer.next(this.customers);
    }, 1000);
  });
  return customersObservable;
}
// add customers to the customer array
public addCustomers(data: ICustomer): any {
  this.customers.push(data);
}
constructor() {}
}
