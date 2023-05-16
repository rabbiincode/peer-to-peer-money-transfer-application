 import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { PasswordPatternValidator } from '../customValidation/custom-validation/custom-validation.component';

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
  loginUserResponse: any

  constructor(private formBuilder: FormBuilder, private login: AuthService){}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      emailAddressOrUserName: [''],
      password: ['', {validators: PasswordPatternValidator}]
    })
  }

  loginUser(){
    if (this.loginForm.invalid) {
      // here potentially add some visual feedback for a user
      return;
    }
    this.loading = !this.loading

    this.login.loginUser(this.loginForm.value).subscribe((data) => {
      this.loginUserResponse = data
      this.loading = !this.loading
    })
    this.loginForm.reset()
  }
  
  ChangePasswordOpen(){
    this.open = !this.open
  }

  ChangePasswordClose(){
    this.open = false
  }
}
