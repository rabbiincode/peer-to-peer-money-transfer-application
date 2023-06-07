import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'cashMingle-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})

export class UserDashboardComponent {
  name = ''
  accountType = ''
  balance: number

  constructor(private user: UserService){
    this.name = user.userData.firstName
    this.accountType = user.userData.AccountType
    this.balance = user.userData.balance
  }
}