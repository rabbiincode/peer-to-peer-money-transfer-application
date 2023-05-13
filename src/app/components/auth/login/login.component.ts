 import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'cashMingle-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup

  hide: boolean = true
  
  constructor(private formBuilder: FormBuilder, private login: AuthService){}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      emailAddressOrUserName: [''],
      password: ['']
    })
  }

  loginUser(){
    if (this.loginForm.invalid) {
      // here potentially add some visual feedback for a user
      return;
    }

    this.login.loginUser(this.loginForm.value).subscribe((data) => {
      console.log(data)
    })

    // this.loginForm.reset()
  }

}
