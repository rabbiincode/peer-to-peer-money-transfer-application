import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordPatternValidator } from 'src/app/components/auth/customValidation/custom-validation/custom-validation.component';
import { CustomerService } from '../../service/customer.service';

@Component({
  selector: 'cashMingle-withdrawal',
  templateUrl: './withdrawal.component.html',
  styleUrls: ['./withdrawal.component.scss']
})

export class WithdrawalComponent {
  hide = true
  loading = false
  balance: number
  withdrawalResponse!: any
  withdrawalError!: any
  withdrawalForm!: FormGroup
  banks: string[] = ['Access Bank', 'Citibank', 'Ecobank Nigeria', 'Fidelity Bank', 'First City Monument Bank Limited', 'First Bank', 'Guaranty Trust Bank', 'Keystone Bank', 'Polaris Bank',
   'Stanbic IBTC Bank', 'Sterling Bank', 'Union Bank', 'United Bank for Africa', 'Unity Bank', 'Wema Bank', 'Zenith Bank', 'FairMoney', 'Kuda Bank', 'Moniepoint', 'Opay', 'Palmpay'
  ]

  constructor(private withdraw: UserService, private withdrawal: CustomerService, private formBuilder: FormBuilder){
    this.balance = withdraw.userData.balance
  }

  ngOnInit(): void {
    this.withdrawalForm = this.formBuilder.group({
      amount: ['', Validators.pattern('^[0-9]*$')],
      bankAccountNumber: ['', Validators.pattern('^[0-9]*$')],
      bankName: [''],
      cashMingleAccountNumber: [this.withdraw.userData.accountNumber],
      password: ['', {validators: PasswordPatternValidator}]
    })
  }
  
  withdrawNow(){
    this.loading = true
    this.withdrawal.withdrawal(this.withdrawalForm.value).subscribe((data) => {
      this.withdrawalResponse = data
      this.loading = false
    }, (error) => {
      this.withdrawalError = error
      this.loading = false
    })
  }
}
