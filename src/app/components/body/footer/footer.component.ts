import { Component } from '@angular/core';

@Component({
  selector: 'cashMingle-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent {
  date = new Date().getFullYear()
}