import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'cashMingle-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})

export class AdminDashboardComponent {
  name = ''
  accountType = ''

  constructor(private admin: UserService){
    admin.userData.firstName ? this.name = admin.userData.firstName : this.name = 'Administrator'
    admin.userData.userType ? this.accountType = admin.userData.userType : this.accountType = 'Admin'
  }

  notifications = [
   '/assets/images/notification/n4.jpg', '/assets/images/notification/n5.jpg', '/assets/images/notification/n6.jpg'
  ]
}
