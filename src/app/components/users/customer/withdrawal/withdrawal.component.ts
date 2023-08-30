import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordPatternValidator } from 'src/app/components/customValidation/custom-validation/custom-validation.component';
import { CustomerService } from '../../service/customer.service';
import { UserData } from 'src/app/components/interfaces/user';

@Component({
  selector: 'cashMingle-withdrawal',
  templateUrl: './withdrawal.component.html',
  styleUrls: ['./withdrawal.component.scss']
})

export class WithdrawalComponent {
  loading = false
  userData!: UserData
  withdrawalResponse!: any
  withdrawalError!: any
  withdrawalForm!: FormGroup
  banks: string[] = ['Access Bank', 'Citibank', 'Ecobank Nigeria', 'Fidelity Bank', 'First City Monument Bank Limited', 'First Bank', 'Guaranty Trust Bank', 'Keystone Bank', 'Polaris Bank',
   'Stanbic IBTC Bank', 'Sterling Bank', 'Union Bank', 'United Bank for Africa', 'Unity Bank', 'Wema Bank', 'Zenith Bank', 'FairMoney', 'Kuda Bank', 'Moniepoint', 'Opay', 'Palmpay'
  ]

  constructor(private withdraw: UserService, private withdrawal: CustomerService, private formBuilder: FormBuilder){
    this.userData = withdraw.userData
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
      this.withdraw.getRefreshedData.subscribe(data => this.userData = data)
      this.withdraw.updatedData()
      this.loading = false
    }, (error) => {
      this.withdrawalError = error
      this.loading = false
    })
  }
}