import { Component, Input } from '@angular/core';
import { Team } from '../body';

@Component({
  selector: 'cashMingle-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})

export class TeamComponent {
  @Input() scrollPagePosition!: string
  
  team: Team[] = [
    {
      name: 'Benedict Ezemenahi',
      position: 'Team Lead',
      image: 'assets/images/team/team1.jpg',
      github: 'https://github.com/Myxic',
      twitter: 'https://twitter.com/ben_ezemenahi',
      linkedIn: 'https://www.linkedin.com/in/benezemenahi1999',
      animation: 'animate__animated animate__fadeInTopLeft'
    },
    {
      name: 'Chibueze Charles C',
      position: 'Team Associate',
      image: 'assets/images/team/team2.jpg',
      github: 'http://www.github.com/Charles-04',
      twitter: 'https://twitter.com/CharlesCeeJay05',
      linkedIn: 'https://www.linkedin.com/in',
      animation: 'animate__animated animate__rotateIn'
    },
    {
      name: 'Success Isaiah',
      position: 'Team Associate',
      image: 'assets/images/team/team3.jpg',
      github: 'https://github.com/rabbiincode',
      twitter: 'https://twitter.com',
      linkedIn: 'https://www.linkedin.com/in/successisaiah',
      animation: 'animate__animated animate__fadeInTopRight'
    }
  ]
}
