import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'cashMingle-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})

export class EditComponent {
  arrow = false
  loading = false
  editUserResponse!: any
  editUserError!: any
  nameForm!: FormGroup
  editForm!: FormGroup
  editChoiceValue!: string
  editChoice: string[] = ['firstName', 'lastName', 'middleName', 'balance', 'recoveryMail', 'dateOfBirth', 'userType', 'businessName', 'nin',
   'cac', 'businessType', 'profession', 'bvn', 'address', 'verified', 'activated', 'lien', 'logins', 'userName', 'email', 'emailConfirmed', 
   'phoneNumber', 'phoneNumberConfirmed', 'twoFactorEnabled', 'lockoutEnd', 'lockoutEnabled', 'accessFailedCount' 
  ]

  constructor(private edit: UserService, private formBuilder: FormBuilder){}

  ngOnInit(){
    this.nameForm = this.formBuilder.group({ userName: [''] })
    this.editForm = this.formBuilder.group({
      operationType: [0],
      path: [{value: '', disabled: true}],
      op: [''],
      from: [''],
      value: ['']
    })
  }

  editUser(){
    this.editForm.patchValue({op: 'replace', path: this.editChoiceValue})
    this.loading = true
    this.edit.editUserDetails(this.nameForm.value.userName, [this.editForm.getRawValue()]).subscribe((data) => {
      this.editUserResponse = data
      this.loading = false
    }, (error) => {
      this.editUserError = error
      this.loading = false
    })
  }
}