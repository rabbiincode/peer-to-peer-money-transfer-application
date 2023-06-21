import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'cashMingle-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.scss']
})

export class DepositComponent {
  card = false
  loading = false
  balance: number
  amount = ''
  depositForm!: FormGroup
  depositResponse!: any
  depositError!: any

  constructor(private deposit: UserService, private formBuilder: FormBuilder){
    this.balance = deposit.userData.balance
  }

  ngOnInit(): void {
    this.depositForm = this.formBuilder.group({
      cvc: ['', Validators.pattern('^[0-9]*$')],
      amount: ['', Validators.pattern('^[0-9]*$')],
      cardName: [''],
      cardNumber: ['', Validators.pattern('^[ 0-9]*$')],    
      cardExpiry: ['', Validators.pattern('^[ 0-9]*$')]
    })
  }

  payWithCard(){
    this.card = true
  }
  
  depositNow(){}
}
