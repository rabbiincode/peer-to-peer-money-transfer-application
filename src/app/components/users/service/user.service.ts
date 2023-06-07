import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserData } from '../user';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  url = "https://localhost:44340/CashMingle/Admin"
  userData: UserData = {
    firstName: '',
    middleName: '',
    lastName: '',
    userName: '',
    phoneNumber: '',
    email: '',
    birthday: new Date,
    userTypeId: 0,
    AccountType: '',
    balance: 0,
    deleted: false,
    active: false,
    createdAt: new Date,
    updatedAt: new Date
  }

  constructor(private http: HttpClient) {}

  getUserData(EmailAddressOrUserName: string){
    this.http.get(`${this.url}/get-customer-by-email-or-userName?EmailAddressOrUserName=${EmailAddressOrUserName}`)
    .subscribe((data: any) => {
      this.userData.firstName = data.firstName
      this.userData.middleName = data.middleName
      this.userData.lastName = data.lastName
      this.userData.userName = data.userName
      this.userData.phoneNumber = data.phoneNumber
      this.userData.email = data.email
      this.userData.birthday = data.birthday
      this.userData.userTypeId = data.userTypeId
      this.userData.balance = data.balance
      this.userData.deleted = data.deleted
      this.userData.active = data.active
      this.userData.createdAt = data.createdAt
      this.userData.updatedAt = data.updatedAt

      if (data.userTypeId == 1){
        this.userData.AccountType = 'Individual'
      }
      if (data.userTypeId == 2){ 
        this.userData.AccountType = 'Corporate'
      }
      if (data.userTypeId == 3){
        this.userData.AccountType = 'Admin'
      }
      if (data.userTypeId == 4){
        this.userData.AccountType = 'SuperAdmin'
      }
    })
  }
}