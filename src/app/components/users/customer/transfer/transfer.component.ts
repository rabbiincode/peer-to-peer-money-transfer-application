import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordPatternValidator } from 'src/app/components/customValidation/custom-validation/custom-validation.component';
import { CustomerService } from '../../service/customer.service';
import { UserData } from 'src/app/components/interfaces/user';

@Component({
  selector: 'cashMingle-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})

export class TransferComponent {
  loading = false
  userData!: UserData
  transferResponse!: any
  transferError!: any
  transferForm!: FormGroup

  constructor(private transfer: UserService, private transferFund: CustomerService, private formBuilder: FormBuilder){
    this.userData = transfer.userData
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
      this.transfer.getRefreshedData.subscribe(data => this.userData = data)
      this.transfer.updatedData()
      this.loading = false
    }, (error) => {
      this.transferError = error
      this.loading = false
    })
  }
}