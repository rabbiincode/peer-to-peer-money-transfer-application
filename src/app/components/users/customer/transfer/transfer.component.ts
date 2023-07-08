import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordPatternValidator } from 'src/app/components/auth/customValidation/custom-validation/custom-validation.component';
import { CustomerService } from '../../service/customer.service';

@Component({
  selector: 'cashMingle-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})

export class TransferComponent {
  hide = true
  loading = false
  balance: number
  transferResponse!: any
  transferError!: any
  transferForm!: FormGroup

  constructor(private transfer: UserService, private transferFund: CustomerService, private formBuilder: FormBuilder){
    this.balance = transfer.userData.balance
  }

  ngOnInit(): void {
    this.transferForm = this.formBuilder.group({
      amount: ['', Validators.pattern('^[0-9]*$')],
      receiverAccountNumber: ['', Validators.pattern('^[0-9]*$')],
      senderAccountNumber: [this.transfer.userData.accountNumber],
      senderPassword: ['', {validators: PasswordPatternValidator}],
      description: ['']
    })
  }
  
  transferNow(){
    this.loading = true
    this.transferFund.transfer(this.transferForm.value).subscribe((data) => {
      this.transferResponse = data
      this.loading = false
    }, (error) => {
      this.transferError = error
      this.loading = false
    })
  }
}
