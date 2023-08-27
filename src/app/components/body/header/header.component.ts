import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cashMingle-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  open = false
  color='color:#4338ca'
  background='background:linear-gradient(to right, #60a5fa 20%, #3b82f6 30%, #172554 50%)'
  
  @Input() changeBackground = false
  @Input() styleLinkOnScroll = ""
  @Output() navigateToSection = new EventEmitter<string>

  SidebarOpen(){
    this.open = !this.open
  }

  SidebarClose(){
    this.open = false
  }

  navigateSection(fragment: string){
    this.navigateToSection.emit(fragment)
  }
}