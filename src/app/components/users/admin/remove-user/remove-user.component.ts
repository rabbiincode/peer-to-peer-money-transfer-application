import { Component } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/components/auth/service/auth.service';

@Component({
  selector: 'cashMingle-remove-user',
  templateUrl: './remove-user.component.html',
  styleUrls: ['./remove-user.component.scss']
})

export class RemoveUserComponent {
  arrow = false
  arrow1 = false
  arrow2 = false
  loading = false
  loading1 = false
  loading2 = false
  access = false
  deactivateUserForm!: FormGroup
  deleteForm!: FormGroup
  deleteUserForm!: FormGroup
  deactivateUserResponse!: any
  deleteResponse!: any
  deleteUserResponse!: any
  deactivateUserErrorMessage!: any
  deleteErrorMessage!: any
  deleteUserErrorMessage!: any
  
  constructor(private formBuilder: FormBuilder, private auth: AuthService, private removeUser: AdminService){}

  ngOnInit(): void {
    this.access = this.auth.tokenData.role.includes(('SuperAdmin'))
    this.deactivateUserForm = this.formBuilder.group({
      userName: ['']
    })
    this.deleteForm = this.formBuilder.group({
      userName: ['']
    })
    this.deleteUserForm = this.formBuilder.group({
      userName: ['']
    })
  }

  deactivateUser(){
    this.loading = true
    this.removeUser.deactivateUser(this.deactivateUserForm.value.userName).subscribe((data) => {
      this.deactivateUserResponse = data
      this.loading = false
    }, (error) => {
      this.deactivateUserErrorMessage = error
      this.loading = false
    })
  }

  delete(){
    this.loading1 = true
    this.removeUser.delete(this.deleteForm.value.userName).subscribe((data) => {
      this.deleteResponse = data
      this.loading1 = false
    }, (error) => {
      this.deleteErrorMessage = error
      this.loading1 = false
    })
  }
  
  deleteUser(){
    this.loading2 = true
    this.removeUser.deleteUser(this.deleteUserForm.value.userName).subscribe((data) => {
      this.deleteUserResponse = data
      this.loading2 = false
    }, (error) => {
      this.deleteUserErrorMessage = error
      this.loading2 = false
    })
  }
}