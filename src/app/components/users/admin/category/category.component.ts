import { Component, Input } from '@angular/core';

@Component({
  selector: 'cashMingle-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})

export class CategoryComponent {
  tableHeader: string[] = ['#', 'firstName', 'middleName', 'lastName', 'userName', 'phoneNumber', 'email',
   'accountNumber', 'birthday', 'userTypeId', 'balance', 'deleted', 'active', 'createdAt', 'updatedAt'
  ]
  @Input() show!: string
  @Input() tableData!: any
  @Input() tableData1!: any
  @Input() tableData2!: any
}
