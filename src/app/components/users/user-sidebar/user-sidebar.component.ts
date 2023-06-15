import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Sidebar } from '../../interfaces/user';

@Component({
  selector: 'cashMingle-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.scss']
})

export class UserSidebarComponent {
  @Input() sidebarToggle = true 
  @Input() sidebarContent!: Sidebar[]
  @Output() sidebarHideOnClick = new EventEmitter<boolean>()

  hideOnClick(){
    if (!this.sidebarToggle){
      this.sidebarToggle = true
      this.sidebarHideOnClick.emit(this.sidebarToggle)
    }
  }   
}
