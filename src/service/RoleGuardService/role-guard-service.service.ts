import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { ConnexionService } from '../connexionService/connexion-service.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardServiceService implements CanActivate {

  constructor(public auth: ConnexionService, public router: Router) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {    // this will be passed from the route config
    // on the data property
    const expectedRole = route.data.expectedRole;
    const currentRole = this.auth.getClientRole();    // decode the token to get its payload
    if ( !this.auth.getConnected() || currentRole !== expectedRole ) {
      this.router.navigate(['connexion']);
      return false;
    }
    return true;
  }
}
