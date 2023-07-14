import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slider } from './components/animations/route-animations';
import { AuthService } from './components/auth/service/auth.service';

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
  // constructor(private auth: AuthService){
  //   auth.persistLogin()
  // }
}
