import { Component } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { FormBuilder, FormGroup } from '@angular/forms';

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
  category!: string;
  categoryNumber!: number;
  search!: string;
  searchForm!: FormGroup
  getCustomersByCategoryResponse!: any
  searchCustomerResponse!: any
  getCustomersByCategoryError!: any
  searchCustomerError!: any
  customerCategory: string[] = ['Individual', 'Business', 'Admin', 'Super Admin']
  searchBy: string[] = ['Email/ UserName', 'Account Number']

  constructor(private formBuilder: FormBuilder, private query: AdminService){}

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      emailAddressOrUserName: [''],
      accountNumber: ['']
    })
  }

  selectCategory(){
    this.selected = 'first'
    this.loading = true
    switch (this.category) {
      case 'Individual':
        this.categoryNumber = 1
      break
      case 'Business':
        this.categoryNumber = 2
      break
      case 'Admin':
        this.categoryNumber = 3
      break
      case 'Super Admin':
        this.categoryNumber = 4
      break
    }
    this.query.getCustomersByCategory(this.categoryNumber).subscribe((data: any) => {
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

    if (this.search == 'Email/ UserName') {
      this.query.getCustomersByEmailOrUserName(this.searchForm.value.emailAddressOrUserName).subscribe((data: any) => {
        this.searchCustomerResponse = data
        this.loading1 = false
        this.show = true
      }, (error) => {
        this.searchCustomerError = error
        this.loading1 = false
      })
    }

    if (this.search == 'Account Number') {
      this.query.getCustomersByAccountNumber(this.searchForm.value.accountNumber).subscribe((data: any) => {
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
