import { Component } from '@angular/core';
import { AdminService } from '../../service/admin.service';

@Component({
  selector: 'cashMingle-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})

export class AllUsersComponent {
  show = true
  loading = false
  tableHeader: string[] = ['#', 'firstName', 'middleName', 'lastName', 'userName', 'phoneNumber', 'email',
   'accountNumber', 'birthday', 'userTypeId', 'balance', 'deleted', 'active', 'createdAt', 'updatedAt'
  ]
  tableData!: any
  viewUsersError!: any

  constructor(private users: AdminService){}

  viewUsers(){
    this.loading = true
    this.users.getAllUsers().subscribe((data: any) => {
      this.tableData = data
      this.loading = false
      this.show = false
    }, (error) => {
      this.viewUsersError = error
      this.loading = false
    })
  }
}