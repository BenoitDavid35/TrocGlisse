import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiCallService } from '../../service/api-call/api-call.service';
import { ConnexionService } from '../../service/connexionService/connexion-service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  confirm: any;
  url: string = 'contact-api/';
  object: string = '';
  message: string = '';

  constructor(private httpService: HttpClient, private router: Router, private apiService: ApiCallService, private Connexion: ConnexionService) { }

  ngOnInit() {
  }

  onSubmit(){
    this.apiService.callServer(this.url,[this.object,this.message,this.Connexion.getClientID()])
    .subscribe(resp => {
      this.confirm = resp;

      if(this.Connexion.getConnected()){
        this.router.navigate(['']);
      }
    });
  }

}
