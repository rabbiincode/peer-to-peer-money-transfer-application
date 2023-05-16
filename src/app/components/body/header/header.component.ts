import { Component, Input } from '@angular/core';

@Component({
  selector: 'cashMingle-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  open = false
  
  background='background:linear-gradient(to right, #60a5fa 20%, #3b82f6 30%, #172554 50%)'
  color='color:#4338ca'
  
  @Input() changeBackground = false

  SidebarOpen(){
    this.open = !this.open
  }

  SidebarClose(){
    this.open = false
  }
}