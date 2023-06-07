import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'cashMingle-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})

export class TransferComponent {
  balance: number

  constructor(private transfer: UserService){
    this.balance = transfer.userData.balance
  }
}
