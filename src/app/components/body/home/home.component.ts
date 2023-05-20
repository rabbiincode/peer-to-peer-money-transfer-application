import { Component, HostListener } from '@angular/core';
import { Card } from '../body';

@Component({
  selector: 'cashMingle-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent {
  scroll = false
  hover = false
  @HostListener("document:scroll")

  changeBackground(){
    const scrollPosition = document.body.scrollTop || document.documentElement.scrollTop
    if(scrollPosition > 0){
      this.scroll = true
    }
    else{
      this.scroll = false
    }
  }
  
  cards: Card[] = [
    {
      service: 'Deposit',
      image: '/assets/images/card1.png',
      background: 'background:#42a5f5',
      hover: 'background:#0d47a1'
    },
    {
      service: 'Withdrawal',
      image: '/assets/images/card2.png',
      background: 'background:#1e88e5',
      hover: 'background:#1565c0'
    },
    {
      service: 'Transfer',
      image: '/assets/images/card3.png',
      background: 'background:#1565c0',
      hover: 'background:#1e88e5'
    },
    {
      service: 'Savings',
      image: '/assets/images/card4.png',
      background: 'background:#0d47a1',
      hover: 'background:#42a5f5'
    }
  ]
}