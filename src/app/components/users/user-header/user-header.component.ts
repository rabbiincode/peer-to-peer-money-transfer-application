import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Sidebar } from '../user';
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

  constructor(private logout: Router){}

  toggleSidebar(){
    this.open = !this.open
    this.togglePageWidth.emit(this.open)
  }

  logOut(){
    this.logout.navigate(['/home'])
  }
}
