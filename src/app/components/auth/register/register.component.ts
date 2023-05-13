import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { EmailValidator, MatchPasswordValidator, NumberValidator, PasswordPatternValidator, PhoneNumberValidator, SpaceCheckValidator } from '../customValidation/custom-validation/custom-validation.component';
import { AuthService } from '../services/auth.service';

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
  
  user!: string

  choiceUser(selectedUser: string){
    this.user = selectedUser
  }

  constructor(private formBuilder: FormBuilder, private register: AuthService) {}

  ngOnInit(): void {
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
      cac: ['']
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

    // For removing empty fields in reactive forms
    let formValue = { ...this.registerForm.value }

    for(let data in formValue) {
      if(!formValue[data]) {
        delete formValue[data]
      }
    }

    this.register.registerUser(formValue, this.user).subscribe((data) => {
      // console.log(data)
    })

    // this.registerForm.reset()
  }
}
