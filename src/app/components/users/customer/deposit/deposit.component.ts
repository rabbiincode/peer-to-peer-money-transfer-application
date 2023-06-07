import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'cashMingle-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.scss']
})

export class DepositComponent {
  balance: number

  constructor(private deposit: UserService){
    this.balance = deposit.userData.balance
  }
}
