import { Component } from '@angular/core';
import { Sidebar } from 'src/app/components/interfaces/user';

@Component({
  selector: 'cashMingle-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})

export class CustomerComponent {
  fullWidth = true
  togglePage(pageWidth: boolean){
    this.fullWidth = pageWidth
  }

  sidebar: Sidebar[] = [
    {
      service: 'Dashboard',
      icon: 'dashboard',
      url: '/user/dashboard'
    },
    {
      service: 'Deposit',
      icon: 'monetization_on',
      url: '/user/deposit'
    },
    {
      service: 'Withdraw',
      icon: 'payment',
      url: '/user/withdrawal'
    },
    {
      service: 'Transfer',
      icon: 'flight_takeoff',
      url: '/user/transfer'
    },
    {
      service: 'Savings',
      icon: 'savings',
      url: '/user/savings'
    },
    {
      service: 'Transaction History',
      icon: 'history',
      url: '/user/transactions'
    },
    {
      service: 'Utilities',
      icon: 'assistant',
      url: '/user/utilities'
    },
    {
      service: 'Contact Us',
      icon: 'phone',
      url: '/user/contact'
    },
    {
      service: 'Financial Services',
      icon: 'article',
      url: '/user/finance'
    }
  ]
}