import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Sidebar } from '../user';
import { AuthService } from '../../auth/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'cashMingle-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.scss']
})

export class UserHeaderComponent {
  open = true

  @Output() togglePageWidth = new EventEmitter<boolean>()
  @Input() sidebar!: Sidebar[]

  constructor(private logout: AuthService, private route: Router){}

  toggleSidebar(){
    this.open = !this.open
    this.togglePageWidth.emit(this.open)
  }

  logOut(){
    this.logout.logOut()
    this.route.navigate(['/home'])
  }
}
