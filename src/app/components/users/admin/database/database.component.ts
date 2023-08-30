import { Component } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/components/auth/service/auth.service';

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
  access = false
  userForm!: FormGroup
  tableData!: any
  tableData1!: any
  viewDataError!: any
  searchUserError!: any
  tableHeader: string[] = ['#', 'first name', 'last name', 'middle name', 'account number', 'balance', 'recovery mail', 'date of birth', 'userType id', 'business name', 'nin',
   'cac', 'business type', 'profession', 'bvn', 'address', 'verified', 'activated', 'deleted', 'lien', 'complains', 'created at', 'updated at', 'transaction history',
   'claims', 'logins', 'tokens', 'user roles', 'id', 'userName', 'normalized userName', 'email', 'normalized email', 'email confirmed', 'password hash', 
   'security stamp', 'concurrency stamp', 'phone number', 'phone number confirmed', 'two factor enabled', 'lockout end', 'lockout enabled', 'access failed count' 
  ]

  constructor(private formBuilder: FormBuilder, private auth: AuthService, private data: AdminService){}

  ngOnInit(): void {
    this.access = this.auth.tokenData.role.includes(('SuperAdmin'))
    this.userForm = this.formBuilder.group({
      emailAddressOrUserName: ['']
    })
  }

  searchUser(){
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