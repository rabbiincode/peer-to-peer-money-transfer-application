import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdminService } from '../../service/admin.service';
import { AuthService } from 'src/app/components/auth/service/auth.service';

@Component({
  selector: 'cashMingle-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})

export class TransactionsComponent {
  arrow = false
  arrow1 = false
  loading = false
  loading1 = false
  access = false
  tableData!: any
  tableData1!: any
  getTransactionError!: any
  getTransactionError1!: any
  transactionForm!: FormGroup
  tableHeader: string[] = ['Id', 'UserId', 'Transaction Date', 'Transaction Type', 'Amount ($)', 'Description']
  tableHeader1: string[] = ['#', 'Transaction Id', 'User Id', 'Transaction Date', 'Transaction Type', 'Amount ($)', 'Description']

  constructor(private formBuilder: FormBuilder, private auth: AuthService, private transaction: AdminService){}

  ngOnInit(): void {
    this.access = this.auth.tokenData.role.includes(('SuperAdmin'))
    this.transactionForm = this.formBuilder.group({
      transactionId: ['']
    })
  }

  getIndividualTransaction(){
    this.loading = true
    this.transaction.getIndividualTransaction(this.transactionForm.value.transactionId).subscribe((data) => {
      this.tableData = data
      this.loading = false
    }, (error) => {
      this.getTransactionError = error
      this.loading = false
    })
  }

  getAllTransactions(){
    this.loading1 = true
    this.transaction.getAllTransactions().subscribe((data) => {
      this.tableData1 = data
      this.loading1 = false
    }, (error) => {
      this.getTransactionError1 = error
      this.loading1 = false
    })
  }

  get sortData(){
    // sort data to display recent transactions first
    return this.tableData1.sort((a: any, b: any) => {
      return <any>new Date(b.dateStamp) - <any>new Date(a.dateStamp);
    })
  }
}