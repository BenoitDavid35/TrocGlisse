import { Component, OnInit } from '@angular/core';
import { ConnexionService } from '../../service/connexionService/connexion-service.service';

@Component({
  selector: 'app-account-widget',
  templateUrl: './account-widget.component.html',
  styleUrls: ['./account-widget.component.css']
})
export class AccountWidgetComponent implements OnInit {

  constructor(private Connexion: ConnexionService) { }

  Avatar: String;
  Connected: String;

  ngOnInit() {
    this.Avatar = this.Connexion.getClientAvatar();
    this.Connected = this.Connexion.getConnected();
  }

}
