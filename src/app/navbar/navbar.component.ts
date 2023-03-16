import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnexionService } from '../../service/connexionService/connexion-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private Connexion: ConnexionService) { }

  Avatar: string;
  Connected: string;

  ngOnInit() {
    // this.Avatar = this.Connexion.getClientAvatar();
    // this.Connected = this.Connexion.getConnected();
  }

  clickMessage = '';
  searchInput = 'pizza';

  onKey(event: any){
    //LOAD SUGGESTIONS FROM DB
    this.searchInput = 'ravioli';
    this.searchInput;
    //above code allows to display a new element according to a keyup event
  }

  onSubmit(event){
    this.clickMessage = 'yup, i was inside babe';
    //return searchInput;
  }

}
