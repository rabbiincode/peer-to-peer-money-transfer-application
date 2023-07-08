import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login, ResetPassword, TokenData } from '../../interfaces/auth';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  isAuthenticated = false
  url = "https://localhost:44376/CashMingle/Account"
  helper = new JwtHelperService()
  
  tokenData: TokenData = {
    name: '',
    email: '',
    role: []
  }

  constructor(private http: HttpClient) {}

  loginUser(login: Login){
    return this.http.post(`${this.url}/login`, login)
  }

  twoFactorAuthLogin(token: string){
    return this.http.post(`${this.url}/verify-otp`, token)
  }
  
  validateLogin(authenticate: boolean){
    this.isAuthenticated = authenticate
  }

  logOut(){
    this.validateLogin(false)
    localStorage.clear()
  }

  storeJwtToken(token: string){
    localStorage.setItem('token', token)
    const data = this.helper.decodeToken(token)

    this.tokenData.name = data["name"]
    this.tokenData.email = data["email"]
    this.tokenData.role = data["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]
  }

  retrieveJwtToken(){
    return localStorage.getItem('token')
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