import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdminService } from '../../service/admin.service';
import { AuthService } from 'src/app/components/auth/service/auth.service';

@Component({
  selector: 'cashMingle-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})

export class RoleComponent {
  arrow = false
  arrow1 = false
  arrow2 = false
  loading = false
  loading1 = false
  loading2 = false
  loading3 = false
  access = false
  rolesForm!: FormGroup
  manageRolesForm!: FormGroup
  manageClaimsForm!: FormGroup
  selected!: string
  selectedClaim!: string
  tableData!: any
  tableData1!: any
  tableData2!: any
  rolesResponse!: any
  userRoleResponse!: any
  userClaimsResponse!: any
  rolesErrorMessage!: any
  userRoleErrorMessage!: any
  userClaimsErrorMessage!: any
  roles: string[] = ['Get user role', 'Add user to role', 'Remove user from role']
  claims: string[] = ['Get user claim', 'Add claim to user', 'Remove user claim']
  tableHeader: string[] = ['#', 'role name', 'id', 'role claims', 'created at', 'updated at', 'active']

  constructor(private formBuilder: FormBuilder, private auth: AuthService, private role: AdminService){}

  ngOnInit(): void {
    this.access = this.auth.tokenData.role.includes(('SuperAdmin'))
    this.rolesForm = this.formBuilder.group({
      roleName: ['']
    })
    this.manageRolesForm = this.formBuilder.group({
      userName: [''],
      roleName: ['']
    })
    this.manageClaimsForm = this.formBuilder.group({
      userName: [''],
      claimName: [''],
      claimValue: ['']
    })
  }

  back(){
    this.tableData = ''
  }

  getAllRoles(){
    this.loading = true
    this.role.getAllRoles().subscribe((data) => {
      this.tableData = data
      this.loading = false
    }, (error) => {
      this.rolesErrorMessage = error
      this.loading = false
    })
  }
  
  createRole(){
    this.loading1 = true
    this.role.createRole(this.rolesForm.value.roleName).subscribe((data) => {
      this.rolesResponse = data
      this.loading1 = false
    }, (error) => {
      this.rolesErrorMessage = error
      this.loading1 = false
    })
  }

  getUserRole(){
    this.loading2 = true
    this.role.getUserRoles(this.manageRolesForm.value.userName).subscribe((data) => {
      this.tableData1 = data
      this.loading2 = false
    }, (error) => {
      this.userRoleErrorMessage = error
      this.loading2 = false
    })
  }

  addUserToRole(){
    this.loading2 = true
    this.role.addUserToRole(this.manageRolesForm.value.userName, this.manageRolesForm.value.roleName).subscribe((data) => {
      this.userRoleResponse = data
      this.loading2 = false
    }, (error) => {
      this.userRoleErrorMessage = error
      this.loading2 = false
    })
  }

  removeUserFromRole(){
    this.loading2 = true
    this.role.removeUserFromRole(this.manageRolesForm.value.userName, this.manageRolesForm.value.roleName).subscribe((data) => {
      this.userRoleResponse = data
      this.loading2 = false
    }, (error) => {
      this.userRoleErrorMessage = error
      this.loading2 = false
    })
  }

  getUserClaims(){
    this.loading3 = true
    this.role.getUserClaims(this.manageClaimsForm.value.userName).subscribe((data) => {
      this.tableData2 = data
      this.loading3 = false
    }, (error) => {
      this.userClaimsErrorMessage = error
      this.loading3= false
    })
  }

  addClaimToUser(){
    this.loading3 = true
    this.role.addClaimToUser(this.manageClaimsForm.value.userName, this.manageClaimsForm.value.claimName, this.manageClaimsForm.value.claimValue).subscribe((data) => {
      this.userClaimsResponse = data
      this.loading3 = false
    }, (error) => {
      this.userClaimsErrorMessage = error
      this.loading3 = false
    })
  }

  removeUserClaim(){
    this.loading3 = true
    this.role.removeUserClaim(this.manageClaimsForm.value.userName, this.manageClaimsForm.value.claimName, this.manageClaimsForm.value.claimValue).subscribe((data) => {
      this.userClaimsResponse = data
      this.loading3 = false
    }, (error) => {
      this.userClaimsErrorMessage = error
      this.loading3 = false
    })
  }

  manageRoles(){
    switch (this.selected) {
      case 'Get user role':
        this.getUserRole()
      break;
      case 'Add user to role':
        this.addUserToRole()
      break;
      case 'Remove user from role':
        this.removeUserFromRole()
      break;
    }
  }

  manageClaims(){
    switch (this.selectedClaim) {
      case 'Get user claim':
        this.getUserClaims()
      break;
      case 'Add claim to user':
        this.addClaimToUser()
      break;
      case 'Remove user claim':
        this.removeUserClaim()
      break;
    }
  }
}