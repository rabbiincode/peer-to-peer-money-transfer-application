import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'cashMingle-user-choice',
  templateUrl: './user-choice.component.html',
  styleUrls: ['./user-choice.component.scss']
})
export class UserChoiceComponent {
  show = true
  user!: string
  users: string[] = ['admin', 'individual', 'business']

  @Output() selectedUser = new EventEmitter<string>()

  selectUser(selected: string){
    this.show = !this.show
    this.selectedUser.emit(selected)
  }

}
