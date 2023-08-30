import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordPatternValidator } from '../../customValidation/custom-validation/custom-validation.component';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { UserService } from '../../users/service/user.service';

@Component({
  selector: 'cashMingle-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  email = ''
  hide = true
  open = false
  loading = false
  loading1 = false
  accessDenied = false
  twoFactorAuth = false
  sessionTimeOut = false
  responseMessage: any
  errorMessage: any
  twoFactorAuthErrorMessage: any
  loginForm!: FormGroup
  twoFactorAuthForm!: FormGroup

  constructor(private formBuilder: FormBuilder, private login: AuthService, private userData: UserService, private route: Router){}

  ngOnInit(): void {
    this.sessionTimeOut = this.login.sessionTimeOut
    this.loginForm = this.formBuilder.group({
      emailAddressOrUserName: [''],
      password: ['', {validators: PasswordPatternValidator}]
    })
    this.twoFactorAuthForm = this.formBuilder.group({
      userName: [''],
      token: ['', Validators.pattern('^[0-9]*$')]
    })
  }

  loginUser(){
    if (this.loginForm.invalid){
      // here potentially add some visual feedback for a user
      return;
    }
    this.loading = !this.loading
    // Implement validate password before user data loads - pending
    this.userData.getUserData(this.loginForm.value.emailAddressOrUserName)
     
    this.login.loginUser(this.loginForm.value).subscribe((data: any) => {
      if (this.userData.userData.twoFactorEnabled){
        this.responseMessage = data
        this.twoFactorAuthForm.patchValue({userName: this.userData.userData.userName})
        // hash some letters of the email
        this.email = this.userData.userData.email.replace(/^(.)(.*)(.@.*)$/, (_: any, a: any, b: any, c: any) => a + b.replace(/./g, '*') + c)
        this.twoFactorAuth = true
      }
      else{
        this.directLogin(data)
      }
    }, (error) => {
      this.errorMessage = error
      this.loading = false
    })
  }

  directLogin(data: any){
    this.login.storeJwtToken(data.token)
    this.login.validateLogin(true)
    this.loading = false
    this.loading1 = false

    if (this.login.tokenData.role.includes('Admin') || this.login.tokenData.role.includes('SuperAdmin')){
      this.route.navigate(['/admin'])
    }
    else if (this.login.tokenData.role.includes('User')){
      this.login.autoLogOut(data.token)
      this.route.navigate(['/user'])
    }
    else{
      this.login.validateLogin(false)
      localStorage.clear()
      this.accessDenied = true
      this.loading = false
    }
  }

  twoFactorAuthLogin(){
    this.loading1 = true
    this.login.twoFactorAuthLogin(this.twoFactorAuthForm.value).subscribe((data) => {
      this.directLogin(data)
    }, (error) => {
      this.twoFactorAuthErrorMessage = error
      this.loading1 = false
    })
  }

  ChangePasswordOpen(){
    this.open = !this.open
  }

  ChangePasswordClose(){
    this.open = false
  }
}