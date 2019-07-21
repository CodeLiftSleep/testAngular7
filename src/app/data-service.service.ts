import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {Customers} from './ICustomer';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  customers: Customers[] = [
    {
    firstName: 'Matt',
    lastName: 'Osman'
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
public addCustomers(data: Customers): any {
  this.customers.push(data);
}
constructor() {}
}
