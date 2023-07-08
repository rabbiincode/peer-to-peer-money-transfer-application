import { Component } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'cashMingle-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent {
  arrow = false
  arrow1 = false
  show = false
  loading = false
  loading1 = false
  selected!: string 
  customerCategoryValue!: string;
  searchByValue!: string;
  userNameOrEmailForm!: FormGroup
  accountNumberForm!: FormGroup
  getCustomersByCategoryResponse!: any
  searchCustomerResponse!: any
  getCustomersByCategoryError!: any
  searchCustomerError!: any
  customerCategory: string[] = ['Individual', 'Business', 'Admin', 'Super Admin']
  searchBy: string[] = ['Email/ UserName', 'Account Number']

  constructor(private formBuilder: FormBuilder, private query: AdminService){}

  ngOnInit(): void {
    this.userNameOrEmailForm = this.formBuilder.group({
      emailAddressOrUserName: [''],
    })
    this.accountNumberForm = this.formBuilder.group({
      accountNumber: ['', Validators.pattern('^[0-9]*$')]
    })
  }

  back(){
    this.show = false
  }

  searchByCategory(){
    this.query.getCustomersByCategory(this.customerCategoryValue).subscribe((data: any) => {
      this.getCustomersByCategoryResponse = data
      this.loading = false
      this.show = true
    }, (error) => {
      this.getCustomersByCategoryError = error
      this.loading = false
    })
  }

  searchCustomer(){
    this.loading1 = true
    this.selected = 'second'

    if (this.searchByValue == 'Email/ UserName') {
      this.query.getCustomersByEmailOrUserName(this.userNameOrEmailForm.value.emailAddressOrUserName).subscribe((data: any) => {
        this.searchCustomerResponse = data
        this.loading1 = false
        this.show = true
      }, (error) => {
        this.searchCustomerError = error
        this.loading1 = false
      })
    }

    if (this.searchByValue == 'Account Number') {
      this.query.getCustomersByAccountNumber(this.accountNumberForm.value.accountNumber).subscribe((data: any) => {
        this.searchCustomerResponse = data
        this.loading1 = false
        this.show = true
      }, (error) => {
        this.searchCustomerError = error
        this.loading1 = false
      })
    }
  }
}
