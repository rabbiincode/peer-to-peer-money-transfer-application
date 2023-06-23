import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PasswordPatternValidator } from '../customValidation/custom-validation/custom-validation.component';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { UserService } from '../../users/service/user.service';

@Component({
  selector: 'cashMingle-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  hide = true
  open = false
  loading = false
  accessDenied = false
  errorMessage: any
  loginForm!: FormGroup
 
  constructor(private formBuilder: FormBuilder, private login: AuthService, private userData: UserService, private route: Router){}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      emailAddressOrUserName: [''],
      password: ['', {validators: PasswordPatternValidator}]
    })
  }

  loginUser(){
    if (this.loginForm.invalid){
      // here potentially add some visual feedback for a user
      return;
    }
    this.loading = !this.loading
    this.userData.getUserData(this.loginForm.value.emailAddressOrUserName)

    this.login.loginUser(this.loginForm.value).subscribe((data: any) => {
      this.login.storeJwtToken(data.token)
      this.login.validateLogin(true)
      this.loading = false
     
      if (this.login.tokenData.role.includes('Admin') ){
        this.route.navigate(['/admin'])
      }
      else if (this.login.tokenData.role.includes('User')){
        this.route.navigate(['/user'])
      }
      else{
        this.login.validateLogin(false)
        this.accessDenied = true
      }
    }, (error) => {
      this.errorMessage = error
      this.loading = false
    })
  }
  
  ChangePasswordOpen(){
    this.open = !this.open
  }

  ChangePasswordClose(){
    this.open = false
  }
}
