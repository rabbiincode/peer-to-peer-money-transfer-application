import { Component } from '@angular/core';

@Component({
  selector: 'cashMingle-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  open = false;

  SidebarOpen(){
    this.open = !this.open
  }

  SidebarClose(){
    this.open = false
  }
}
