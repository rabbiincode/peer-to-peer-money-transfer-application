import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmailValidator, PasswordPatternValidator, MatchPasswordValidator } from '../../customValidation/custom-validation/custom-validation.component';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'cashMingle-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})

export class ForgotPasswordComponent {
  hide = true
  hide1 = true
  loading = false
  email!: string
  title!: string
  authenticated!: boolean
  getTokenResponse: any
  resetPasswordResponse: any
  getTokenErrorMessage: any
  resetPasswordErrorMessage: any
  resetPasswordProgress = false
  resetForm!: FormGroup
  changePasswordForm!: FormGroup

  constructor(private formBuilder: FormBuilder, private forgotPassword: AuthService){}
  
  ngOnInit(): void {
    this.authenticated = this.forgotPassword.isAuthenticated
    this.forgotPassword.isAuthenticated == true ? this.title = 'Change Password' : this.title = 'Forgot Password'

    this.resetForm = this.formBuilder.group({email: ['', {validators: EmailValidator}]})
    this.changePasswordForm = this.formBuilder.group({
      email: [{value: '', disabled: true}],
      password: ['', {validators: PasswordPatternValidator}],
      confirmPassword: [''],
      token: ['']
    },
    {validators: MatchPasswordValidator}
    )
  }

  @Output() closeChangePassword = new EventEmitter<boolean>()
  @Output() closeChangePassword1 = new EventEmitter<boolean>()

  setEmailAddress(){
    this.changePasswordForm.patchValue({email: this.email})
  }
  
  get changePasswordFormControl() {
    return this.changePasswordForm?.controls
  }

  CloseChangePassword(){
    this.closeChangePassword.emit(false)
  }

  CloseChangePassword1(){
    this.closeChangePassword1.emit(false)
  }

  getToken(){
    this.email = this.resetForm.value.email
    this.setEmailAddress()
    this.loading = !this.loading
    
    this.forgotPassword.getToken(this.email).subscribe(data => {
      this.getTokenResponse = data
      }, (error) => {
        this.getTokenErrorMessage = error
        this.loading = false
    })
  }

  resetPassword(){
    this.resetPasswordProgress = !this.resetPasswordProgress

    this.forgotPassword.resetPassword(this.changePasswordForm.getRawValue()).subscribe(data => {
      this.resetPasswordResponse = data
      this.resetPasswordProgress = false
      this.changePasswordForm.reset()
      setTimeout(() => {
        this.CloseChangePassword()
      }, 5000)
      }, (error) => {
        this.resetPasswordErrorMessage = error
        this.resetPasswordProgress = false
    })
  }
} 