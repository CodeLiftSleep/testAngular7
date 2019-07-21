import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatTableModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CustomerDataTableComponent } from './customer-data-table/customer-data-table.component';
import { AddCustomerModalComponent } from './add-customer-modal/add-customer-modal.component';
import {MatDialogModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatFormFieldModule, MatButtonModule, MatInputModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    CustomerDataTableComponent,
    AddCustomerModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  /*providers: [
    MatDialogRef,
    {provide: MAT_DIALOG_DATA, useValue: {}}
  ],*/

  bootstrap: [AppComponent],
  entryComponents: [AddCustomerModalComponent]
})
export class AppModule { }
