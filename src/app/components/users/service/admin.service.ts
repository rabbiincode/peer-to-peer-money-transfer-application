import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AdminService {
  url = "https://localhost:44376/CashMingle/Admin"
  url2 = "https://localhost:44376/CashMingle/Roles_And_Claims"

  constructor(private http: HttpClient){}

  getData(){
    return this.http.get(`${this.url}/get-all`)
  }

  getAllUsers(){
    return this.http.get(`${this.url}/get-all-customers`)
  }

  getCustomersByUserId(userId: string){
    return this.http.get(`${this.url}/get-all-customer-by-user-id?userId=${userId}`)
  }

  getCustomersByCategory(category: string){
    return this.http.get(`${this.url}/get-all-customers-by-category?category=${category}`) 
  }

  getCustomersByEmailOrUserName(emailAddressOrUserName: string){
    return this.http.get(`${this.url}/get-customer-by-email-or-userName?EmailAddressOrUserName=${emailAddressOrUserName}`)
  }

  getCustomersByEmailOrUserNameAll(emailAddressOrUserName: string){
    return this.http.get(`${this.url}/get-customer-by-email-or-userName-all?EmailAddressOrUserName=${emailAddressOrUserName}`)
  }

  getCustomersByAccountNumber(accountNumber: number){
    return this.http.get(`${this.url}/get-customer-by-accountNumber?accountNumber=${accountNumber}`)
  }

  getAllTransactions(){
    return this.http.get(`${this.url}/get-all-transactions`)
  }
  
  getIndividualTransaction(transactionId: number){
    return this.http.get(`${this.url}/get-transaction-by-id?id=${transactionId}`)
  }

  deactivateUser(userName: string){
    return this.http.post(`${this.url}/deactivate-customer?userName=${userName}`, userName)
  }

  delete(userName: string){
    return this.http.post(`${this.url}/delete-customer?userName=${userName}`, userName)
  }

  deleteUser(userName: string){
    return this.http.delete(`${this.url}/delete/delete-customer?userName=${userName}`)
  }

  getAllRoles(){
    return this.http.get(`${this.url2}/get-all-roles`)
  }

  createRole(roleName: string){
    return this.http.post(`${this.url2}/create-role?name=${roleName}`, roleName)
  }

  addUserToRole(userName: string, roleName: string){
    return this.http.post(`${this.url2}/add-user-to-role?userName=${userName}&roleName=${roleName}`, roleName)
  }

  getUserRoles(userName: string){
    return this.http.get(`${this.url2}/get-user-roles?userName=${userName}`)
  }

  removeUserFromRole(userName: string, roleName: string){
    return this.http.post(`${this.url2}/remove-user-from-role?userName=${userName}&roleName=${roleName}`, roleName)
  }
  
  getUserClaims(userName: string){
    return this.http.get(`${this.url2}/get-user-claims?userName=${userName}`)
  }

  addClaimToUser(userName: string, claimName: string, claimValue: string){
    return this.http.post(`${this.url2}/add-claim-to-user?userName=${userName}&claimName=${claimName}&claimValue=${claimValue}`, claimName)
  }

  removeUserClaim(userName: string, claimName: string, claimValue: string){
    return this.http.post(`${this.url2}/remove-user-claim?userName=${userName}&claimName=${claimName}&claimValue=${claimValue}`, claimName)
  }
}