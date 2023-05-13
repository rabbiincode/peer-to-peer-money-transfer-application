import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  url = "https://localhost:44340/CashMingle/Account"
  // login: Login[] = []

  loginUser(login: Login){
    return this.http.post(`${this.url}/login`, login)
  }
  
  registerUser(register: any, user: string){
    return this.http.post(`${this.url}/register/${user}`, register)
  }

}