import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Sidebar } from '../../interfaces/user';
import { AuthService } from '../../auth/service/auth.service';

@Component({
  selector: 'cashMingle-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.scss']
})

export class UserSidebarComponent {
  showSettings!: boolean
  @Input() sidebarToggle = true 
  @Input() sidebarContent!: Sidebar[]
  @Output() sidebarHideOnClick = new EventEmitter<boolean>()

  constructor(private sidebar: AuthService, private route: Router){
    this.showSettings = sidebar.tokenData.role.includes('User')
  }

  hideOnClick(){
    if (!this.sidebarToggle){
      this.sidebarToggle = true
      this.sidebarHideOnClick.emit(this.sidebarToggle)
    }
  }

  logOut(){
    this.sidebar.logOut()
  }
}