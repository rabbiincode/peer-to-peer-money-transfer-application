import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserData } from 'src/app/components/interfaces/user';
import { UserService } from '../../service/user.service';
import { AdminService } from '../../service/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'cashMingle-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent {
  loading = false
  loading1 = false
  loading2 = false
  arrow = false
  editPassword = false
  deleteChecked!: boolean  
  checked!: boolean
  userData!: UserData
  editForm!: FormGroup
  twoFactorAuthForm!: FormGroup
  deleteForm!: FormGroup
  editUserResponse!: any
  editUserError!: any
  toggleTwoFactorAuthResponse!: any
  toggleTwoFactorAuthError!: any
  deleteAccountResponse!: any
  deleteAccountError!: any
  editDataValue!: string
  editData: string[] = ['address', 'userName', 'password', 'phoneNumber']

  constructor(private profile: UserService, private deleteUser: AdminService, private formBuilder: FormBuilder, private route: Router){
    this.userData = profile.userData
  }

  ngOnInit(){
    this.editForm = this.formBuilder.group({
      operationType: [0],
      path: [{value: '', disabled: true}],
      op: [''],
      from: [''],
      value: ['']
    })
    this.twoFactorAuthForm = this.formBuilder.group({
      operationType: [0],
      path: [{value: '', disabled: true}],
      op: [''],
      from: [''],
      value: ['']
    })
    this.deleteForm = this.formBuilder.group({
      message: ['']
    })
  }

  changePasswordClose(){
    this.editPassword = false
  }

  selected(){
    switch (this.editDataValue) {
      case 'password':
        this.editPassword = true
      break;
      default:
      this.editCustomerData()
      break;
    }
  }

  editCustomerData(){
    this.editForm.patchValue({op: 'replace', path: this.editDataValue})
    this.loading = true
    this.profile.editUserDetails(this.profile.userData.userName, [this.editForm.getRawValue()]).subscribe((data) => {
      this.editUserResponse = data
      this.profile.getRefreshedData.subscribe(data => this.userData = data)
      this.profile.updatedData()
      this.loading = false
    }, (error) => {
      this.editUserError = error
      this.loading = false
    })
  }

  toggleTwoFactorAuth(){
    this.twoFactorAuthForm.patchValue({op: 'replace', path: 'twoFactorEnabled'})
    this.loading1 = true
    this.profile.editUserDetails(this.profile.userData.userName, [this.twoFactorAuthForm.getRawValue()]).subscribe((data) => {
      this.toggleTwoFactorAuthResponse = data
      this.profile.getRefreshedData.subscribe(data => this.userData = data)
      this.profile.updatedData()
      this.loading1 = false
    }, (error) => {
      this.toggleTwoFactorAuthError = error
      this.loading1 = false
    })
  }

  deleteAccount(){
    this.loading2 = true
    this.profile.sendMail('testproject146@gmail.com', `Delete My Account With UserName - ${this.profile.userData.userName}`, `Reason For Delete : ${this.deleteForm.value.message}`).subscribe()
    this.deleteUser.delete(this.profile.userData.userName).subscribe((data) => {
      this.deleteAccountResponse = data
      this.loading2 = false
      setTimeout(() => {
        this.route.navigate(['/home'])
      }, 5000);
    }, (error) => {
      this.deleteAccountError = error
      this.loading2 = false
    })
  }
}