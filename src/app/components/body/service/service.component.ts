import { Component } from '@angular/core';
import { Slider } from '../body';

@Component({
  selector: 'cashMingle-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent {
  slide: Slider[] = [
    {
      image: '/assets/images/service/s1.jpg',
      title: 'DEPOSIT',
      content: 'Deposit money to your CashMingle account directly from your bank account or using any third party service securely',
      color: 'color:black'
    },
    {
      image: '/assets/images/service/s2.jpg',
      title: 'WITHDRAWAL',
      content: 'Withdraw funds to any account of your choice completely free. No hidden Charges',
      color: 'color:black'
    },
    {
      image: '/assets/images/service/s3.jpg',
      title: 'MONEY TRANSFER',
      content: 'Transfer funds seamlessly with lightening speed',
      color: 'color:white'
    },
    {
      image: '/assets/images/service/s4.jpg',
      title: 'SAVINGS',
      content: "Save funds for a specific amount of time. No one accesses it until it's due, not even you",
      color: 'color:yellow'
    },
    {
      image: '/assets/images/service/s5.jpg',
      title: 'FINANCIAL PLANING',
      content: 'Our financial experts are always available to discuss with you to find the best financial plan for you and your business',
      color: 'color:orange'
    }
  ]
}
