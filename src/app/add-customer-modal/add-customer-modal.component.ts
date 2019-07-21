import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit, Output, EventEmitter, Optional } from '@angular/core';
import {Customers} from '../ICustomer';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {validationMessages} from '../validation';


@Component({
  selector: 'app-add-customer-modal',
  templateUrl: './add-customer-modal.component.html',
  styleUrls: ['./add-customer-modal.component.css']
})
export class AddCustomerModalComponent implements OnInit {

  validationMsg = validationMessages;
  public customerForm: FormGroup;


  ngOnInit(): void {
    this.customerForm = this.fb.group({
      firstName: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(30),
        Validators.minLength(2), Validators.pattern('^[-a-zA-Z\s\']*')])),
      lastName: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(30),
        Validators.minLength(2), Validators.pattern('^[-a-zA-Z\s\']*')]))
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.customerForm.controls[controlName].hasError(errorName);
  }

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<AddCustomerModalComponent>,
              @Optional() @Inject(MAT_DIALOG_DATA) data: Customers) { }


  onSubmit(): void {
    this.dialogRef.close(this.customerForm.value);
  }
  onCancel(): void {
    this.dialogRef.close();
  }
}
