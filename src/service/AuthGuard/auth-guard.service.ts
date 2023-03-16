import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { ConnexionService } from '../connexionService/connexion-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public auth: ConnexionService, public router: Router) { }

  canActivate(): boolean {
     if (!this.auth.getConnected()) {
       this.router.navigate(['connexion']);
       return false;
     }
     return true;
   }

}
