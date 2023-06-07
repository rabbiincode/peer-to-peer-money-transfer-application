import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'cashMingle-savings',
  templateUrl: './savings.component.html',
  styleUrls: ['./savings.component.scss']
})

export class SavingsComponent {
  balance: number

  constructor(private savings: UserService){
    this.balance = savings.userData.balance
  }
}
