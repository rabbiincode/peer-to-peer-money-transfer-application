import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Airtime, CardDeposit, Transfer, Withdraw } from '../../interfaces/user';

@Injectable({
  providedIn: 'root'
})

export class CustomerService {
  url = "https://localhost:44376/CashMingle/Fund"
  url1 = "https://localhost:44376/CashMingle/Transactions"

  constructor(private http: HttpClient){}

  cardDeposit(deposit: CardDeposit){
    return this.http.post(`${this.url}/card-deposit`, deposit)
  }

  withdrawal(withdraw: Withdraw){
    return this.http.post(`${this.url}/withdrawal`, withdraw)
  }

  airtimePurchase(airtime: Airtime){
    return this.http.post(`${this.url}/purchase-airtime`, airtime)
  }

  transfer(transfer: Transfer){
    return this.http.put(`${this.url1}/transfer-money`, transfer)
  }

  transactionHistory(accountNumber: number){
    return this.http.get(`${this.url1}/get-transaction-histories?accountNumber=${accountNumber}`)
  }
}