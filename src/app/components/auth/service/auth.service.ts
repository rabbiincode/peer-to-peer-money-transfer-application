import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login, ResetPassword } from '../auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  url = "https://localhost:44340/CashMingle/Account"

  loginUser(login: Login){
    return this.http.post(`${this.url}/login`, login)
  }
  
  registerUser(register: object, user: string){
    return this.http.post(`${this.url}/register/${user}`, register)
  }
  
  getToken(email: string){
    return this.http.post(`${this.url}/forgot-password?email=${email}`, email)
  }

  resetPassword(reset: ResetPassword){
    return this.http.post(`${this.url}/reset-password`, reset)
  }

}