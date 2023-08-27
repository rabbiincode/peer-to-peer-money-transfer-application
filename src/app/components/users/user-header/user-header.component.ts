import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Sidebar } from '../../interfaces/user';
import { AuthService } from '../../auth/service/auth.service';

@Component({
  selector: 'cashMingle-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.scss']
})

export class UserHeaderComponent {
  open = true
  showSettings!: boolean
  @Input() sidebar!: Sidebar[]
  @Output() togglePageWidth = new EventEmitter<boolean>()

  constructor(private header: AuthService){
    this.showSettings = header.tokenData.role.includes('User')
  }

  toggleSidebar(){
    this.open = !this.open
    this.togglePageWidth.emit(this.open)
  }

  logOut(){
    this.header.logOut()
  }
}