import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ConnexionService } from '../service/connexionService/connexion-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trocGlisse';

  constructor(private router: Router, private Connexion: ConnexionService) {
    // override the route reuse strategy, issue found and solved in GitHub,
    //solution is thanks to mihaicux2 on https://github.com/angular/angular/issues/13831
     this.router.routeReuseStrategy.shouldReuseRoute = function(){
        return false;
     }

     this.router.events.subscribe((evt) => {
        if (evt instanceof NavigationEnd) {
           // trick the Router into believing it's last link wasn't previously loaded
           this.router.navigated = false;
           // if you need to scroll back to top, here is the right place
           window.scrollTo(0, 0);
        }
    });
    //END OF BUG FIX
  }

}
