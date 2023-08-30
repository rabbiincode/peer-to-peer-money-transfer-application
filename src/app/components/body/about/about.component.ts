import { Component, Input } from '@angular/core';

@Component({
  selector: 'cashMingle-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent {
  @Input() scrollPagePosition!: string
}