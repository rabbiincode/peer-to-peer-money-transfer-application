import { Component } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'cashMingle-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.scss']
})

export class DatabaseComponent {
  show = true
  arrow = false
  arrow1 = false
  loading = false
  loading1 = false
  userForm!: FormGroup
  searchUserError!: any
  tableHeader: string[] = ['#', 'firstName', 'lastName', 'middleName', 'accountNumber', 'balance', 'recoveryMail', 'dateOfBirth', 'userTypeId', 'businessName', 'nin',
   'cac', 'businessType', 'profession', 'bvn', 'address', 'verified', 'activated', 'deleted', 'lien', 'complains', 'createdAt', 'updatedAt', 'transactionHistory',
   'claims', 'logins', 'tokens', 'userRoles', 'id', 'userName', 'normalizedUserName', 'email', 'normalizedEmail', 'emailConfirmed', 'passwordHash', 
   'securityStamp', 'concurrencyStamp', 'phoneNumber', 'phoneNumberConfirmed', 'twoFactorEnabled', 'lockoutEnd', 'lockoutEnabled', 'accessFailedCount' 
  ]
  tableData!: any
  tableData1!: any
  viewDataError!: any

  constructor(private formBuilder: FormBuilder, private data: AdminService){}

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      emailAddressOrUserName: ['']
    })
  }

  searchUser(){
    console.log(this.userForm.value)
    this.loading = true
    this.data.getCustomersByEmailOrUserNameAll(this.userForm.value.emailAddressOrUserName).subscribe((data: any) => {
      this.tableData1 = data
      this.loading = false
    }, (error) => {
      this.searchUserError = error
      this.loading = false
    })
  }

  viewData(){
    this.loading1 = true
    this.data.getData().subscribe((data: any) => {
      this.tableData = data
      this.loading1 = false
      this.show = false
    }, (error) => {
      this.viewDataError = error
      this.loading1 = false
    })
  }
}
