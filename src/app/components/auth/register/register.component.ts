import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { EmailValidator, MatchPasswordValidator, NumberValidator, PasswordPatternValidator, PhoneNumberValidator, SpaceCheckValidator } from '../../customValidation/custom-validation/custom-validation.component';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'cashMingle-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  hide = true
  hide1 = true
  arrow = false
  arrow1 = false
  arrow2 = false
  loading = false
  checked = false
  name!: string
  user!: string
  authenticate!: boolean
  errorMessage: any
  registerUserResponse: any
  registerForm!: FormGroup

  constructor(private formBuilder: FormBuilder, private register: AuthService, private route: Router) {}

  ngOnInit(): void {
    this.authenticate = this.register.isAuthenticated
    this.register.isAuthenticated == true ? this.name = 'Register' : this.name = 'CashMingle'

    this.registerForm = this.formBuilder.group({
      firstName: new FormControl('', {validators: SpaceCheckValidator}),
      lastName: ['', {validators: SpaceCheckValidator}],
      middleName: [''],
      email: ['', {validators: EmailValidator}],
      phoneNumber: ['', {validators: PhoneNumberValidator}],
      userName: [''],
      password: ['', {validators: PasswordPatternValidator}],
      confirmPassword: [''],
      recoveryMail: ['', {validators: EmailValidator}],
      address: [''],
      profession: [''],
      businessName: [''],
      businessType: [''],
      nin: ['', {validators: NumberValidator}],
      bvn: ['', {validators: NumberValidator}],
      cac: ['', {validators: PhoneNumberValidator}]
     },
     {validators: MatchPasswordValidator}
    )
  }

  choiceUser(selectedUser: string){
    this.user = selectedUser
  }

  back(){
    this.user = ''
  }

  get registerFormControl() {
    return this.registerForm?.controls
  }

  accept(){
    this.checked = !this.checked
  }

  registerUser(){
    if (this.registerForm.invalid) {
      // here potentially add some visual feedback for a user
       return;
    }
    this.loading = !this.loading

    // For removing empty fields in reactive forms
    let formValue = { ...this.registerForm.value }

    for(let data in formValue) {
      if(!formValue[data]) {
        delete formValue[data]
      }
    }

    this.register.registerUser(formValue, this.user).subscribe((data) => {
      this.registerUserResponse = data
      this.loading = false
      if (!this.authenticate){
        setTimeout(() => {
          this.route.navigate(['/login'])
        }, 8000)
      }
      this.registerForm.reset()
      }, (error) => {
        this.errorMessage = error
        this.loading = false
    })
  }
}