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
    user.userData.userType ? this.accountType = user.userData.userType : this.accountType = 'Customer'
    this.balance = user.userData.balance
  }

  notifications = [
   '/assets/images/notification/n2.jpg', '/assets/images/notification/n1.jpg', '/assets/images/notification/n3.jpg', 
   '/assets/images/notification/n4.jpg', '/assets/images/notification/n7.jpg', '/assets/images/notification/n8.jpg'
  ]
}