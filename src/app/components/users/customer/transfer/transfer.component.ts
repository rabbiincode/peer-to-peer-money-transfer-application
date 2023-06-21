import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordPatternValidator } from 'src/app/components/auth/customValidation/custom-validation/custom-validation.component';

@Component({
  selector: 'cashMingle-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})

export class TransferComponent {
  hide = true
  loading = false
  balance: number
  transferForm!: FormGroup
  transferResponse!: any
  transferError!: any

  constructor(private transfer: UserService, private formBuilder: FormBuilder){
    this.balance = transfer.userData.balance
  }

  ngOnInit(): void {
    this.transferForm = this.formBuilder.group({
      amount: ['', Validators.pattern('^[0-9]*$')],
      accountNumber: ['', Validators.pattern('^[0-9]*$')],
      description: [''],
      password: ['', {validators: PasswordPatternValidator}]
    })
  }
  
  transferNow(){}
}
