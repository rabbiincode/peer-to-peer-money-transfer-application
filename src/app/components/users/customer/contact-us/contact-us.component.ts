import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmailValidator, PhoneNumberValidator } from 'src/app/components/customValidation/custom-validation/custom-validation.component';
import { BodyService } from 'src/app/components/body/body-service/body.service';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'cashMingle-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})

export class ContactUsComponent {
  loading = false
  sendMailResponse = false
  sendMailError!: any
  contactUsForm!: FormGroup

  constructor(private formBuilder: FormBuilder, private mail: BodyService, private userData: UserService){}

  ngOnInit(): void {
    this.contactUsForm = this.formBuilder.group({
      userName: [''],
      email: ['', {validators: EmailValidator}],
      phoneNumber: ['', {validators: PhoneNumberValidator}],
      subject: [''],
      message: [''],
      _template: [''],
      _captcha: ['']
    })
    this.setValue()
  }

  setValue(){
    this.contactUsForm.patchValue({ userName: this.userData.userData.userName, email: this.userData.userData.email,
    phoneNumber: this.userData.userData.phoneNumber, _template: 'table', _captcha: 'false'})
  }

  get contactFormControl() {
    return this.contactUsForm?.controls
  }

  contactUs(){
    if (this.contactUsForm.invalid) {
      // here potentially add some visual feedback for a user
       return;
    }
    this.loading = !this.loading

    // Remove empty fields in form on submission
    let formValue = { ...this.contactUsForm.value }

    for(let data in formValue) {
      if(!formValue[data]) {
        delete formValue[data]
      }
    }
    
    this.mail.sendMail(formValue).subscribe(() => {
      this.sendMailResponse = !this.sendMailResponse
      this.loading = false
      this.contactUsForm.reset()
    }, (error) => {
      this.sendMailError = error
      this.loading = false
    })
  }
}