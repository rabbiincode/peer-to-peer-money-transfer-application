import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder ,FormGroup } from '@angular/forms';
import { EmailValidator, MatchPasswordValidator, PasswordPatternValidator } from '../customValidation/custom-validation/custom-validation.component';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'cashMingle-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})

export class ForgotPasswordComponent {
  resetForm!: FormGroup
  changePasswordForm!: FormGroup

  hide = true
  hide1 = true
  email!: string
  loading = false
  resetPasswordProgress = false
  getTokenResponse: any
  resetPasswordResponse: any
  getTokenErrorMessage: any
  resetPasswordErrorMessage: any
  
  @Output() closeChangePassword = new EventEmitter<boolean>()

  constructor(private formBuilder: FormBuilder, private forgotPassword: AuthService){}
  
  ngOnInit(): void {
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

  setEmailAddress(){
    this.changePasswordForm.patchValue({email: this.email})
  }
  
  get changePasswordFormControl() {
    return this.changePasswordForm?.controls
  }

  CloseChangePassword(){
    this.closeChangePassword.emit(false)
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
      }, 3000);
      }, (error) => {
        this.resetPasswordErrorMessage = error
        this.resetPasswordProgress = false
    })
  }
} 
