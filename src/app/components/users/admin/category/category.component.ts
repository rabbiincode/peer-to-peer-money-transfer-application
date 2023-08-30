import { Component, Input } from '@angular/core';

@Component({
  selector: 'cashMingle-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})

export class CategoryComponent {
  tableHeader: string[] = ['#', 'first name', 'last name', 'middle name', 'username', 'email', 'phone number',
   'account number', 'balance', 'birthday', 'userType id', 'deleted', 'active', 'created at', 'updated at'
  ]
  @Input() show!: string
  @Input() tableData!: any
  @Input() tableData1!: any
}