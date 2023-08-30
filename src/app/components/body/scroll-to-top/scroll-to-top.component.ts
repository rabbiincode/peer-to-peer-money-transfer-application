import { Component, HostListener  } from '@angular/core';

@Component({
  selector: 'cashMingle-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.scss']
})

export class ScrollToTopComponent {
  isShow!: boolean
  topPositionToStartShowing = 300
  @HostListener('window:scroll')
  
  scrollToTop() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0 
    if (scrollPosition >= this.topPositionToStartShowing){
      this.isShow = true
    } 
    else{
      this.isShow = false
    }
  }

  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }
}