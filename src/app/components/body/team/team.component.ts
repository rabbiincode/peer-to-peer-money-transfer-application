import { Component } from '@angular/core';
import { Team } from '../body';

@Component({
  selector: 'cashMingle-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {
  team: Team[] = [
    {
      name: 'Benedict Ezemenahi',
      position: 'Team Lead',
      image: 'assets/images/team1.jpg',
      github: 'https://github.com/Myxic',
      twitter: 'https://twitter.com/ben_ezemenahi',
      linkedIn: 'https://www.linkedin.com/in/benezemenahi1999'
    },
    {
      name: 'Chibueze Charles C',
      position: 'Team Associate',
      image: 'assets/images/team2.jpg',
      github: 'http://www.github.com/Charles-04',
      twitter: 'https://twitter.com/CharlesCeeJay05',
      linkedIn: 'https://www.linkedin.com/in'
    },
    {
      name: 'Success Isaiah',
      position: 'Team Associate',
      image: 'assets/images/team3.jpg',
      github: 'https://github.com/rabbiincode',
      twitter: 'https://twitter.com',
      linkedIn: 'https://www.linkedin.com/in/successisaiah'
    }
  ]
}
