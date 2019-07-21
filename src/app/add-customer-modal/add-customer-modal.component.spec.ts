import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCustomerModalComponent } from './add-customer-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule, MatFormFieldModule, MatInputModule} from '@angular/material';

import { CdkTableModule } from '@angular/cdk/table';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


describe('AddCustomerModalComponent', () => {
  let component: AddCustomerModalComponent;
  let fixture: ComponentFixture<AddCustomerModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCustomerModalComponent ],
      imports: [ReactiveFormsModule, MatTableModule, MatFormFieldModule, CdkTableModule, MatDialogModule, NoopAnimationsModule,
        MatInputModule],
      providers: [
        {provide: MatDialogRef, useValue: {}},
        {provide: MAT_DIALOG_DATA, useValue: {}}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCustomerModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.customerForm.valid).toBeFalsy();
  });

  it('first name field validity', () => {
    let errors = {};
    const firstName = component.customerForm.controls.firstName;
    expect(firstName.valid).toBeFalsy();

    errors = firstName.errors || {};
    // tslint:disable-next-line: no-string-literal
    expect(errors['required']).toBeTruthy();

    firstName.setValue('12');
    errors = firstName.errors || {};
    // tslint:disable-next-line: no-string-literal
    expect(errors['pattern']).toBeTruthy();

    firstName.setValue('a');
    errors = firstName.errors || {};
    // tslint:disable-next-line: no-string-literal
    expect(errors['minlength']).toBeTruthy();

    firstName.setValue('asduiaduiasduasidusaiuasdisudsiaudasiduasiasudiuasiasuasiduasiuasdiuasdiasuia');
    errors = firstName.errors || {};
    // tslint:disable-next-line: no-string-literal
    expect(errors['maxlength']).toBeTruthy();
  });


  it('last name field validity', () => {
    let errors = {};
    const lastName = component.customerForm.controls.lastName;
    expect(lastName.valid).toBeFalsy();

    errors = lastName.errors || {};
    // tslint:disable-next-line: no-string-literal
    expect(errors['required']).toBeTruthy();

    lastName.setValue('12');
    errors = lastName.errors || {};
    // tslint:disable-next-line: no-string-literal
    expect(errors['pattern']).toBeTruthy();

    lastName.setValue('a');
    errors = lastName.errors || {};
    // tslint:disable-next-line: no-string-literal
    expect(errors['minlength']).toBeTruthy();

    lastName.setValue('asduiaduiasduasidusaiuasdisudsiaudasiduasiasudiuasiasuasiduasiuasdiuasdiasuia');
    errors = lastName.errors || {};
    // tslint:disable-next-line: no-string-literal
    expect(errors['maxlength']).toBeTruthy();
  });
});
