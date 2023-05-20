import { Component } from '@angular/core';
import { Sidebar } from '../../user';

@Component({
  selector: 'cashMingle-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent {
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
      service: 'Financial Services',
      icon: 'article',
      url: '/user'
    }
  ]   
}