import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {

  private ClientName: string;
  private ClientSurname: string;
  private ClientMail: string;
  private ClientID: string;
  private ClientAddress: string;
  private ClientAvatar: string;
  private ClientTimestamp: string;
  private Connected: string;
  private ClientPassword: string;
  private ClientRole: string;

  constructor(private cookieService: CookieService) {
    this.Connected = 'false';
  }

  getClientName(){
    this.ClientName = this.cookieService.get('ClientName');
    return this.ClientName;
  }
  setClientName(clientName){
    this.cookieService.set( 'ClientName', clientName );
    this.ClientName = clientName;
  }

  getClientSurname(){
    this.ClientSurname = this.cookieService.get('clientSurname');
    return this.ClientSurname;
  }
  setClientSurname(clientSurname){
    this.cookieService.set( 'clientSurname', clientSurname );
    this.ClientSurname = clientSurname;
  }

  getClientMail(){
    this.ClientMail = this.cookieService.get('clientMail');
    return this.ClientMail;
  }
  setClientMail(clientMail){
    this.cookieService.set( 'clientMail', clientMail );
    this.ClientMail = clientMail;
  }

  getClientID(){
    this.ClientID = this.cookieService.get('clientID');
    return this.ClientID;
  }
  setClientID(clientID){
    this.cookieService.set( 'clientID', clientID );
    this.ClientID = clientID;
  }

  getClientAddress(){
    this.ClientAddress = this.cookieService.get('clientAddress');
    return this.ClientAddress;
  }
  setClientAddress(clientAddress){
    this.cookieService.set( 'clientAddress', clientAddress );
    this.ClientAddress = clientAddress;
  }

  getClientAvatar(){
    this.ClientAvatar = this.cookieService.get('clientAvatar');
    return this.ClientAvatar;
  }
  setClientAvatar(clientAvatar){
    clientAvatar = 'http://vps696635.ovh.net:7777/images-api/' + clientAvatar;
    this.cookieService.set( 'clientAvatar', clientAvatar );
    this.ClientAvatar = clientAvatar;
  }

  getClientTimestamp(){
    this.ClientTimestamp = this.cookieService.get('timestamp');
    return this.ClientTimestamp;
  }
  setClientTimestamp(timestamp){
    this.cookieService.set( 'timestamp', timestamp );
    this.ClientTimestamp = timestamp;
  }

  timestamp(){
    return Math.floor(Date.now() / 1000);
  }

  getConnected(){
    this.Connected = this.cookieService.get('connected');
    return this.Connected;
  }
  setConnected(connected){
    this.cookieService.set( 'connected', connected );
    this.Connected = connected;
  }

  getClientPassword(){
    this.ClientPassword = this.cookieService.get('clientPassword');
    return this.ClientPassword;
  }
  setClientPassword(clientPassword){
    this.cookieService.set( 'clientPassword', clientPassword );
    this.ClientPassword = clientPassword;
  }

  getClientRole(){
    this.ClientRole = this.cookieService.get('clientRole');
    return this.ClientRole;
  }
  setClientRole(clientRole){
    this.cookieService.set( 'clientRole', clientRole );
    this.ClientRole = clientRole;
  }

  disconnect(){
    this.cookieService.delete('ClientName');
    this.cookieService.delete('clientSurname');
    this.cookieService.delete('clientMail');
    this.cookieService.delete('clientID');
    this.cookieService.delete('clientAddress');
    this.cookieService.delete('clientAvatar');
    this.cookieService.delete('timestamp');
    this.cookieService.delete('connected');
    this.Connected = 'false';
    this.cookieService.delete('clientPassword');
    this.cookieService.delete('clientRole');
  }

}
