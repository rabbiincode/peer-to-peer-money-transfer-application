import { Component } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/components/auth/service/auth.service';

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
  access = false
  selected!: string 
  customerCategoryValue!: string;
  searchByValue!: string;
  userIdForm!: FormGroup
  userNameOrEmailForm!: FormGroup
  accountNumberForm!: FormGroup
  getCustomersByCategoryResponse!: any
  searchCustomerResponse!: any
  getCustomersByCategoryError!: any
  searchCustomerError!: any
  customerCategory: string[] = ['Individual', 'Business', 'Admin', 'Super Admin']
  searchBy: string[] = ['User Id', 'Email/ UserName', 'Account Number']

  constructor(private formBuilder: FormBuilder, private auth: AuthService, private query: AdminService){}

  ngOnInit(): void {
    this.access = this.auth.tokenData.role.includes(('SuperAdmin'))
    this.userIdForm = this.formBuilder.group({
      userId: [''],
    })
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
    this.loading = true
    this.selected = 'first'
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

    if (this.searchByValue == 'User Id') {
      this.query.getCustomersByUserId(this.userIdForm.value.userId).subscribe((data: any) => {
        this.searchCustomerResponse = data
        this.loading1 = false
        this.show = true
      }, (error) => {
        this.searchCustomerError = error
        this.loading1 = false
      })
    }

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