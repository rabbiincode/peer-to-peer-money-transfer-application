import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TrackScrollPositionService {
  currentSection: BehaviorSubject<String> = new BehaviorSubject<String>('home');
  sections: string[] = ['home', 'about', 'services', 'team', 'faq', 'contact']

  constructor() {
    document.addEventListener('scroll', () => {
      this.keepTrack();
    })
  }

  keepTrack() {
    const viewHeight = window.innerHeight;
    for (var section of this.sections) {

      const element = document.getElementById(section);
      if (element != null) {
        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < viewHeight / 2) {
          this.currentSection.next(section);
        }
      } else {
      }
    }
  }
}
