import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../../service/customer.service';

@Component({
  selector: 'cashMingle-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.scss']
})

export class DepositComponent {
  card = false
  show = false
  loading = false
  balance: number
  amount = ''
  depositResponse!: any
  depositError!: any
  depositForm!: FormGroup

  constructor(private deposit: UserService, private pay: CustomerService, private formBuilder: FormBuilder){
    this.balance = deposit.userData.balance
  }

  ngOnInit(): void {
    this.depositForm = this.formBuilder.group({
      cashMingleAccountNumber: [this.deposit.userData.accountNumber],
      amount: ['', Validators.pattern('^[0-9]*$')],
      cvc: ['', Validators.pattern('^[0-9]*$')],
      cardName: [''],
      cardNumber: ['', Validators.pattern('^[ 0-9]*$')],
      cardExpiryDate: ['', Validators.pattern('^[ 0-9]*$')]
    })
  }

  payPal(){
    this.show = !this.show
  }

  payWithCard(){
    this.card = true 
  }
  
  depositNow(){
    this.loading = true
    this.pay.cardDeposit(this.depositForm.value).subscribe((data) => {
      this.depositResponse = data
      this.loading = false
    }, (error) => {
      this.depositError = error
      this.loading = false
    })
  }
}
