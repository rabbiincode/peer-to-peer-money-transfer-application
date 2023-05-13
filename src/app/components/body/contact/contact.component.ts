import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmailValidator, PhoneNumberValidator } from '../../auth/customValidation/custom-validation/custom-validation.component';

@Component({
  selector: 'cashMingle-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm!: FormGroup
  
  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: [''],
      email: ['', {validators: EmailValidator}],
      phoneNumber: ['', {validators: PhoneNumberValidator}],
      subject: [''],
      message: [''],
    })
  }

  get contactFormControl() {
    return this.contactForm?.controls
  }

  contactUs(){
    if (this.contactForm.invalid) {
      // here potentially add some visual feedback for a user
       return;
     }


    // this.loginForm.reset()
  }
}