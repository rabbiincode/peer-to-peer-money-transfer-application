import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../service/customer.service';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'cashMingle-customer-transactions',
  templateUrl: './customer-transactions.component.html',
  styleUrls: ['./customer-transactions.component.scss']
})

export class CustomerTransactionsComponent {
  loading = false
  transactions!: number
  tableHeader: string[] = ['#', 'Transaction Id', 'Transaction Type', 'Amount ($)', 'Date', 'Description']
  tableData!: any
  transactionHistoryError!: any

  constructor(private transaction: CustomerService, private user: UserService){
    this.getTransactionHistory()
  }

  get sortData(){
    // sort data to display recent transactions first
    return this.tableData.sort((a: any, b: any) => {
      return <any>new Date(b.dateStamp) - <any>new Date(a.dateStamp);
    })
  }

  getTransactionHistory(){
    this.loading = true
    this.transaction.transactionHistory(this.user.userData.accountNumber).subscribe((data: any) => {
      this.tableData = data
      this.transactions = data.length
      this.loading = false
    }, (error) => {
      this.transactionHistoryError = error
      this.loading = false
    })
  }
}