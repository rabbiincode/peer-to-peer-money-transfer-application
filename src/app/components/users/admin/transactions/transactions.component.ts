import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdminService } from '../../service/admin.service';

@Component({
  selector: 'cashMingle-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})

export class TransactionsComponent {
  arrow = false
  loading = false
  transactionForm!: FormGroup
  tableData!: any
  getTransactionError!: any
  tableHeader: string[] = ['Id', 'UserId', 'Transaction Date', 'Transaction Type', 'Amount', 'Description']

  constructor(private formBuilder: FormBuilder, private transaction: AdminService){}

  ngOnInit(): void {
    this.transactionForm = this.formBuilder.group({
      transactionId: ['']
    })
  }

  getTransaction(){
    this.loading = true
    this.transaction.getTransactions(this.transactionForm.value.transactionId).subscribe((data) => {
      this.tableData = data
      this.loading = false
    }, (error) => {
      this.getTransactionError = error
      this.loading = false
    })
  }
}
