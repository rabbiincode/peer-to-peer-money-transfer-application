import { Component, HostListener } from '@angular/core';
import { Card } from '../body';
import { Router } from '@angular/router';
import { TrackScrollPositionService } from '../body-service/track-scroll-position.service';
import { fade, fade1 } from '../../animations/home-animations';

@Component({
  selector: 'cashMingle-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [fade, fade1]
})

export class HomeComponent {
  scroll = false 
  hover = false
  scrollPagePosition!: string

  constructor(private route: Router, private scrollPosition: TrackScrollPositionService){
    scrollPosition.currentSection.subscribe((res) => {
      this.scrollPagePosition = res.toString()
    })
  }

  @HostListener("document:scroll")

  changeBackground(){
    const scrollPosition = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop
    if(scrollPosition > 0){
      this.scroll = true
    }
    else{
      this.scroll = false
    }
  }

  navigateSection(fragment: string){
    this.route.navigateByUrl('#' + fragment)
  }
  
  cards: Card[] = [
    {
      service: 'Deposit',
      image: '/assets/images/card/card1.png',
      background: 'background:#42a5f5',
      hover: 'background:#0d47a1',
      animation: 'animate__animated animate__fadeInLeft animate__delay-5s'
    },
    {
      service: 'Withdrawal',
      image: '/assets/images/card/card2.png',
      background: 'background:#1e88e5',
      hover: 'background:#1565c0',
      animation: 'animate__animated animate__fadeInBottomRight animate__delay-5s'
    },
    {
      service: 'Transfer',
      image: '/assets/images/card/card3.png',
      background: 'background:#1565c0',
      hover: 'background:#1e88e5',
      animation: 'animate__animated animate__fadeInBottomLeft animate__delay-5s'
    },
    {
      service: 'Savings',
      image: '/assets/images/card/card4.png',
      background: 'background:#0d47a1',
      hover: 'background:#42a5f5',
      animation: 'animate__animated animate__fadeInRight animate__delay-5s'
    }
  ]
}