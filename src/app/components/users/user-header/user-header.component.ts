import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Sidebar } from '../../interfaces/user';
import { AuthService } from '../../auth/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'cashMingle-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.scss']
})

export class UserHeaderComponent {
  open = true
  showSettings!: boolean

  @Output() togglePageWidth = new EventEmitter<boolean>()
  @Input() sidebar!: Sidebar[]

  constructor(private header: AuthService, private route: Router){
    this.showSettings = header.tokenData.role.includes('User')
  }

  toggleSidebar(){
    this.open = !this.open
    this.togglePageWidth.emit(this.open)
  }

  sidebarHideOnClick(){
    this.open = true
  }

  logOut(){
    this.header.logOut()
    this.route.navigate(['/home'])
  }
}
