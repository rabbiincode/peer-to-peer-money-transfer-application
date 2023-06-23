import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'cashMingle-user-choice',
  templateUrl: './user-choice.component.html',
  styleUrls: ['./user-choice.component.scss']
})

export class UserChoiceComponent {
  show = false
  user!: string
  users: string[] = ['admin', 'individual', 'business', 'savings...[coming soon]']

  constructor(private userChoice: AuthService){
    userChoice.isAuthenticated == true ? this.show = true : this.show = false
  }

  @Output() selectedUser = new EventEmitter<string>()

  selectUser(selected: string){
    this.selectedUser.emit(selected)
  }
}
