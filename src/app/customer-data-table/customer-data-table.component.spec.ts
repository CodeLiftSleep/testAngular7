import { MatTableModule, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDataTableComponent } from './customer-data-table.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('CustomerDataTableComponent', () => {
  let component: CustomerDataTableComponent;
  let fixture: ComponentFixture<CustomerDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerDataTableComponent],
      imports: [ReactiveFormsModule, MatTableModule, MatDialogModule ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
