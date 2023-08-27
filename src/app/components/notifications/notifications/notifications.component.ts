import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'cashMingle-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})

export class NotificationsComponent {
  @Output() showNotification = new EventEmitter<boolean>()

  notifications(){
    this.showNotification.emit(false)
  }
}