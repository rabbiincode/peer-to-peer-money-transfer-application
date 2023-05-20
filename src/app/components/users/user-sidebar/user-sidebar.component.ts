import { Component, Input, OnInit } from '@angular/core';
import { Sidebar } from '../user';

@Component({
  selector: 'cashMingle-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.scss']
})
export class UserSidebarComponent {
  @Input() sidebarToggle = true 
  @Input() sidebarContent!: Sidebar[]
}
