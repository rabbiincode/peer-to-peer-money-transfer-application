import { Component } from '@angular/core';
import { Card } from '../body';

@Component({
  selector: 'cashMingle-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent {
  cards: Card[] = [
    {
      service: 'Deposit',
      image: '/assets/images/card1.png',
      background: 'background:#42a5f5'
    },
    {
      service: 'Withdrawal',
      image: '/assets/images/card2.png',
      background: 'background:#1e88e5'
    },
    {
      service: 'Transfer',
      image: '/assets/images/card3.png',
      background: 'background:#1565c0'
    },
    {
      service: 'Savings',
      image: '/assets/images/card4.png',
      background: 'background:#0d47a1'
    }
  ]
}