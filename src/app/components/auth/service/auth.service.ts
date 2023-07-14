import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login, ResetPassword, TokenData } from '../../interfaces/auth';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Router } from '@angular/router';
import { UserService } from '../../users/service/user.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  isAuthenticated = false
  sessionTimeOut = false
  url = "https://localhost:44376/CashMingle/Account"
  helper = new JwtHelperService()
  tokenData: TokenData = {
    name: '',
    email: '',
    role: []
  }

  constructor(private http: HttpClient, private route: Router, private user: UserService){}

  loginUser(login: Login){
    return this.http.post(`${this.url}/login`, login)
  }

  twoFactorAuthLogin(token: string){
    return this.http.post(`${this.url}/verify-otp`, token)
  }

  validateLogin(authenticate: boolean){
    this.isAuthenticated = authenticate
  }

  persistLogin(){
    let token: any = this.retrieveLocalStorageValue('token')
    let role = this.retrieveLocalStorageValue('role')
    const data = this.helper.decodeToken(token)
    if (token){
      if (role){
        this.autoLogOut(token)
      }
      this.tokenData.role = data["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]
      this.user.getUserData(data.email)
      this.isAuthenticated = true
    }
    else{
      this.isAuthenticated = false
    }
  }

  autoLogOut(token: string){
    let currentTime = new Date().getTime()
    let expiryTime: any = this.helper.getTokenExpirationDate(token)?.getTime()
    let expirationTime = expiryTime - currentTime
    setTimeout(() => {
      this.sessionTimeOut = true
      this.logOut()
    }, expirationTime)
  }

  logOut(){
    this.validateLogin(false)
    localStorage.clear()
    this.route.navigate(['/login'])
  }

  storeJwtToken(token: string){
    const data = this.helper.decodeToken(token)
    this.tokenData.name = data["name"]
    this.tokenData.email = data["email"]
    this.tokenData.role = data["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]
    localStorage.setItem('token', token)
    if (this.tokenData.role.includes('User')){
      localStorage.setItem('role', 'user')
    }
  }

  retrieveLocalStorageValue(key: string){
    return localStorage.getItem(key)
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