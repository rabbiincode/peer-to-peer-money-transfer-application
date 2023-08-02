import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login, ResetPassword, TokenData, TwoFactorAuth } from '../../interfaces/auth';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Router } from '@angular/router';
import { UserService } from '../../users/service/user.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  isAuthenticated = false
  sessionTimeOut = false
  clearTimeOut: any
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

  twoFactorAuthLogin(token: TwoFactorAuth){
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
    this.clearTimeOut = setTimeout(() => {
      this.sessionTimeOut = true
      this.exit()
    }, expirationTime)
  }

  logOut(){
    this.sessionTimeOut = false
    this.exit()
  }

  exit(){
    this.validateLogin(false)
    if (this.clearTimeOut){
      clearTimeout(this.clearTimeOut)
    }
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
    return this.http.post(`${this.url}/get-forgotten-password-reset-token?email=${email}`, email)
  }

  resetPassword(reset: ResetPassword){
    return this.http.post(`${this.url}/reset-forgotten-password`, reset)
  }
}