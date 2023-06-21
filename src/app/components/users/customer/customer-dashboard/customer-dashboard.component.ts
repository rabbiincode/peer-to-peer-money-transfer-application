import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'cashMingle-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.scss']
})

export class CustomerDashboardComponent {
  name = ''
  accountType = ''
  balance: number

  constructor(private user: UserService){
    user.userData.firstName ? this.name = user.userData.firstName : this.name = 'Awesome Person'
    user.userData.AccountType ? this.accountType = user.userData.AccountType : this.accountType = 'Customer'
    this.balance = user.userData.balance
  }
}
