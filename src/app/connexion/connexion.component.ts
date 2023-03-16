import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { EncrDecrService } from '../../service/encrdecrService/encr-decr.service';
import { ConnexionService } from '../../service/connexionService/connexion-service.service';
import { Router } from '@angular/router';
import { ApiCallService } from '../../service/api-call/api-call.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  constructor(private httpService: HttpClient, private EncrDecr: EncrDecrService, private Connexion: ConnexionService, private router: Router, private apiService: ApiCallService) { }

  credentials: any;
  login: string = '';
  password: string = '';
  url: string = 'connect-api/';
  creds: string = '';

  ngOnInit() {
  }

  onSubmit(){
    var password = this.EncrDecr.set(this.password);
    this.credentials = this.apiService.callServer(this.url,[this.login,password])
    .subscribe(resp => {
      console.log(resp);
      if(resp == null){
        this.creds = 'TRUE';
      }else{
        this.credentials = resp;
        console.log(resp);
        this.Connexion.setClientName(this.credentials.Name);
        this.Connexion.setClientSurname(this.credentials.Surname);
        this.Connexion.setClientMail(this.credentials.Mail);
        this.Connexion.setClientID(this.credentials.id);
        this.Connexion.setClientAvatar(this.credentials.Avatar);
        this.Connexion.setClientAddress(this.credentials.Address);
        this.Connexion.setClientTimestamp(this.Connexion.timestamp());
        this.Connexion.setConnected('TRUE');
        this.Connexion.setClientPassword(this.credentials.password);
        this.Connexion.setClientRole(this.credentials.role);
        if(this.Connexion.getConnected()){
          this.router.navigate(['']);
        }
      }
    });
  }

}
