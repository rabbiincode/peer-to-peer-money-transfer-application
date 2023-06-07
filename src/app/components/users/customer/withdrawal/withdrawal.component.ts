import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'cashMingle-withdrawal',
  templateUrl: './withdrawal.component.html',
  styleUrls: ['./withdrawal.component.scss']
})

export class WithdrawalComponent {
  balance: number

  constructor(private withdrawal: UserService){
    this.balance = withdrawal.userData.balance
  }
}
