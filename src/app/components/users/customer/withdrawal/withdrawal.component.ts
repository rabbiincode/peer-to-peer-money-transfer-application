import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordPatternValidator } from 'src/app/components/auth/customValidation/custom-validation/custom-validation.component';

@Component({
  selector: 'cashMingle-withdrawal',
  templateUrl: './withdrawal.component.html',
  styleUrls: ['./withdrawal.component.scss']
})

export class WithdrawalComponent {
  hide = true
  loading = false
  balance: number
  withdrawalForm!: FormGroup
  withdrawalResponse!: any
  withdrawalError!: any
  banks: string[] = ['Access Bank', 'Citibank', 'Ecobank Nigeria', 'Fidelity Bank', 'First City Monument Bank Limited', 'First Bank', 'Guaranty Trust Bank', 'Keystone Bank', 'Polaris Bank',
   'Stanbic IBTC Bank', 'Sterling Bank', 'Union Bank', 'United Bank for Africa', 'Unity Bank', 'Wema Bank', 'Zenith Bank', 'FairMoney', 'Kuda Bank', 'Moniepoint', 'Opay', 'Palmpay'
  ]

  constructor(private withdraw: UserService, private formBuilder: FormBuilder){
    this.balance = withdraw.userData.balance
  }

  ngOnInit(): void {
    this.withdrawalForm = this.formBuilder.group({
      amount: ['', Validators.pattern('^[0-9]*$')],
      accountNumber: ['', Validators.pattern('^[0-9]*$')],
      bank: [''],
      password: ['', {validators: PasswordPatternValidator}]
    })
  }
  
  withdrawNow(){}
}
