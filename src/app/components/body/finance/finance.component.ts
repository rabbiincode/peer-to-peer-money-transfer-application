import { Component } from '@angular/core';
import { AuthService } from '../../auth/service/auth.service';

@Component({
  selector: 'cashMingle-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.scss']
})

export class FinanceComponent {
  authenticated!: boolean
  
  constructor(private finance: AuthService){
    this.authenticated = finance.isAuthenticated
  }
}