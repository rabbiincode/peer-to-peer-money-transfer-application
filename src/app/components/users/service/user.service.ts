import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserData } from '../../interfaces/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  url = "https://localhost:44376/CashMingle/Admin"
  url1 = "https://localhost:44376/CashMingle/Account"
  userData: UserData = {
    firstName: '',
    middleName: '',
    lastName: '',
    userName: '',
    email: '',
    phoneNumber: 0,
    accountNumber: 0,
    address: '',
    birthday: new Date,
    businessName: '',
    userType: '',
    balance: 0,
    deleted: false,
    active: false,
    twoFactorEnabled: false,
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
      this.userData.email = data.email
      this.userData.phoneNumber = data.phoneNumber
      this.userData.accountNumber = data.accountNumber
      this.userData.address = data.address
      this.userData.birthday = data.birthday
      this.userData.businessName = data.businessName
      this.userData.userType = data.userTypeId
      this.userData.balance = data.balance
      this.userData.deleted = data.deleted
      this.userData.active = data.active
      this.userData.twoFactorEnabled = data.twoFactorEnabled
      this.userData.createdAt = data.createdAt
      this.userData.updatedAt = data.updatedAt
    })
  }

  editUserDetails(userName: string, edit: any){
    return this.http.patch(`${this.url}/edit-customer-details?userName=${userName}`, edit)
  }

  sendMail(email: string, subject: string, message: string){
    return this.http.post(`${this.url1}/send-email?recipientEmailAddress=${email}&subject=${subject}&message=${message}`, message)
  }
}