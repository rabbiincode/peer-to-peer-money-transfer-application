import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { PasswordPatternValidator, PhoneNumberValidator } from 'src/app/components/customValidation/custom-validation/custom-validation.component';
import { Airtime, UserData } from 'src/app/components/interfaces/user';
import { CustomerService } from '../../service/customer.service';

@Component({
  selector: 'cashMingle-utilities',
  templateUrl: './utilities.component.html',
  styleUrls: ['./utilities.component.scss']
})

export class UtilitiesComponent {
  loading = false
  userData!: UserData
  airtimeChoiceValue!: string
  amountChoiceValue!: string
  utilityChoiceValue!: string
  airtimeResponse!: any
  airtimeError!: any
  airtime: string[] = ['self', 'others']
  amount: string[] = ['100', '200', '500', '1000', '1500', '2000', '5000', 'other amount']
  utility: string[] = ['dstv', 'gotv', 'eedc']
  airtimeForm!: FormGroup
  amountForm!: FormGroup

  constructor(private utilities: UserService, private airtimePurchase: CustomerService, private formBuilder: FormBuilder){
    this.userData = utilities.userData
  }

  ngOnInit(){
    this.airtimeForm = this.formBuilder.group({
      phoneNumber: ['', {validators: PhoneNumberValidator}]
    })
    this.amountForm = this.formBuilder.group({
      amount: [this.amountChoiceValue != 'other amount' ? '0': '', Validators.pattern('^[0-9]*$')],
      password: ['', {validators: PasswordPatternValidator}]
    })
  }

  get airtimeFormControl() {
    return this.airtimeForm?.controls
  }

  airtimeData: Airtime = {
    cashMingleAccountNumber: 0,
    phoneNumber: 0,
    amount: 0,
    password: ''
  }

  loadAirtimeData(){
    if (this.airtimeChoiceValue == 'self'){
      this.airtimeForm.patchValue({phoneNumber: this.utilities.userData.phoneNumber})
    }
    if (this.amountChoiceValue != 'other amount'){
      this.amountForm.patchValue({amount: this.amountChoiceValue})
    }

    this.airtimeData.cashMingleAccountNumber = this.utilities.userData.accountNumber
    this.airtimeData.phoneNumber = this.airtimeForm.value.phoneNumber
    this.airtimeData.amount = this.amountForm.value.amount
    this.airtimeData.password = this.amountForm.value.password
  }

  purchaseAirtime(){
    this.loadAirtimeData()
    this.loading = true
    this.airtimePurchase.airtimePurchase(this.airtimeData).subscribe((data) => {
      this.airtimeResponse = data
      this.utilities.getRefreshedData.subscribe(data => this.userData = data)
      this.utilities.updatedData()
      this.loading = false
    }, (error) => {
      this.airtimeError = error
      this.loading = false
    })
  }
}