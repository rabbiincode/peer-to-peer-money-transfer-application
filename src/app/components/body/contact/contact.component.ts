import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmailValidator, PhoneNumberValidator } from '../../auth/customValidation/custom-validation/custom-validation.component';
import { BodyService } from '../body/body.service';

@Component({
  selector: 'cashMingle-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  loading = false
  sendMailResponse = false
  contactForm!: FormGroup
  
  constructor(private formBuilder: FormBuilder, private mail: BodyService){}

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: [''],
      email: ['', {validators: EmailValidator}],
      phoneNumber: ['', {validators: PhoneNumberValidator}],
      subject: [''],
      message: [''],
      _template: [''],
      _captcha: [''],
    })
    this.setValue()
  }

  setValue(){
    this.contactForm.patchValue({_template: 'table', _captcha: 'false'})
  }

  get contactFormControl() {
    return this.contactForm?.controls
  }

  contactUs(){
    if (this.contactForm.invalid) {
      // here potentially add some visual feedback for a user
       return;
    }
    this.loading = !this.loading

    let formValue = { ...this.contactForm.value }

    for(let data in formValue) {
      if(!formValue[data]) {
        delete formValue[data]
      }
    }
    this.mail.sendMail(formValue).subscribe()

    this.sendMailResponse = !this.sendMailResponse
    this.loading = false
    this.contactForm.reset()
  }
}