import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slider } from './components/animations/route-animations';

@Component({
  selector: 'cashMingle-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  //animations: [slider]
})

export class AppComponent {
  animateRoute(outlet: RouterOutlet){
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation']
  }
}
