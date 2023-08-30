import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'cashMingle-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent {    
  @Output() closeSidebar = new EventEmitter<boolean>()
  @Output() navigateToSection = new EventEmitter<string>

  CloseSidebar(){
    this.closeSidebar.emit(false)
  }

  navigateSection(fragment: string){
    this.closeSidebar.emit(false)
    this.navigateToSection.emit(fragment)
  }
}