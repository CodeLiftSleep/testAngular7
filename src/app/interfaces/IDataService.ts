import {ICustomer} from './ICustomer';

export interface IDataService {
    getCustomers(): void;
    addCustomers(data: ICustomer): void;
  }
