import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PasswordPatternValidator } from '../customValidation/custom-validation/custom-validation.component';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'cashMingle-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup
  hide = true
  open = false
  loading = false
  errorMessage: any
 
  constructor(private formBuilder: FormBuilder, private login: AuthService, private route: Router){}

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

    this.login.loginUser(this.loginForm.value).subscribe((data) => {
      this.login.validateLogin(true)
      this.loginForm.reset()
      this.loading = false
      this.route.navigate(['/user'])
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
