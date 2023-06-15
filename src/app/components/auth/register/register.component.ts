import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { EmailValidator, MatchPasswordValidator, NumberValidator, PasswordPatternValidator, PhoneNumberValidator, SpaceCheckValidator } from '../customValidation/custom-validation/custom-validation.component';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'cashMingle-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup

  hide = true
  hide1 = true
  arrow = false
  arrow1 = false
  arrow2 = false
  loading = false
  
  name!: string
  user!: string
  background!: string
  background1!: string
  errorMessage: any
  registerUserResponse: any

  choiceUser(selectedUser: string){
    this.user = selectedUser
  }

  constructor(private formBuilder: FormBuilder, private register: AuthService, private route: Router) {}

  ngOnInit(): void {
    this.register.isAuthenticated == true ? this.name = 'Register' : this.name = 'CashMingle'
    this.register.isAuthenticated == true ? this.background = 'background:#bfdbfe' : this.background = 'background:#cbd5e1'
    this.register.isAuthenticated == true ? this.background1 = 'background:#93c5fd;color:white;font-size:1.5rem;line-height:2rem;font-weight: 500'
    : this.background1 = 'background:#94a3b8;color:#1d4ed8;font-size:1.25rem;line-height:1.75rem;font-weight: 600'

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

  get registerFormControl() {
    return this.registerForm?.controls
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
      setTimeout(() => {
        this.route.navigate(['/login'])
      }, 5000);
      this.registerForm.reset()
      }, (error) => {
        this.errorMessage = error
        this.loading = false
    })
  }
}
