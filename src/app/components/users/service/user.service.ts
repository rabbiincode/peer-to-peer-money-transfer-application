import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserData } from '../../interfaces/user';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  url = "https://localhost:44376/CashMingle/Admin"
  url1 = "https://localhost:44376/CashMingle/Account"
  userData!: UserData

  constructor(private http: HttpClient){}

  private refreshData$ = new Subject<UserData>()

  getUserData(EmailAddressOrUserName: string){
    this.http.get(`${this.url}/get-customer-by-email-or-userName?EmailAddressOrUserName=${EmailAddressOrUserName}`)
    .subscribe((data: any) => {
      this.refreshData$.next(data)
      this.userData = data
    }, (error) => {
      this.userData = this.userData
    })
  }

  get getRefreshedData(){
    return this.refreshData$
  }

  updatedData(){
    this.getUserData(this.userData.email)
  }

  editUserDetails(userName: string, edit: any){
    return this.http.patch(`${this.url}/edit-customer-details?userName=${userName}`, edit)
  }

  sendMail(email: string, subject: string, message: string){
    return this.http.post(`${this.url1}/send-email?recipientEmailAddress=${email}&subject=${subject}&message=${message}`, message)
  }
}