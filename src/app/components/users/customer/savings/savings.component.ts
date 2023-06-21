import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'cashMingle-savings',
  templateUrl: './savings.component.html',
  styleUrls: ['./savings.component.scss']
})

export class SavingsComponent {
  balance: number
  loading = false
  amount = ''
  startDate!: Date
  endDate!: Date
  savingsForm!: FormGroup
  savingsResponse!: any
  savingsError!: any

  constructor(private savings: UserService, private formBuilder: FormBuilder){
    this.balance = savings.userData.balance
  }

  ngOnInit(){
    this.savingsForm = this.formBuilder.group({
      title: [''],
      amount: ['', Validators.pattern('^[0-9]*$')],
      start: [''],
      end: ['']
    })
  }
}
