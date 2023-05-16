import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'cashMingle-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {    
  @Output() closeSidebar = new EventEmitter<boolean>()

  CloseSidebar(){
    this.closeSidebar.emit(false)
  }
}
