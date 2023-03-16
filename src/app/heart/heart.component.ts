import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { ApiCallService } from '../../service/api-call/api-call.service';
import { ConnexionService } from '../../service/connexionService/connexion-service.service';

@Component({
  selector: 'app-heart',
  templateUrl: './heart.component.html',
  styleUrls: ['./heart.component.css']
})
export class HeartComponent implements OnInit {

  url: string = 'my-favorites/';
  arrProductList: any [];

  constructor(private httpService: HttpClient, private apiService: ApiCallService, private Connexion: ConnexionService) { }

  ngOnInit() {
    var valueArray = [
      this.Connexion.getClientID()
    ];

    this.apiService.callServer(this.url,valueArray)
    .subscribe(resp => {
      console.log(resp);
      this.arrProductList = resp as string [];
    });
  }

}
