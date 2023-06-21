import { Component } from '@angular/core';

@Component({
  selector: 'cashMingle-customer-transactions',
  templateUrl: './customer-transactions.component.html',
  styleUrls: ['./customer-transactions.component.scss']
})

export class CustomerTransactionsComponent {
  transactions = 0
  tableHeader: string[] = ['#', 'Transaction Id', 'Transaction Type', 'Amount', 'Date', 'Description']
  tableData!: any
}
