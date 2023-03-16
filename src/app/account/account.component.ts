import { Component, OnInit } from '@angular/core';
import { ConnexionService } from '../../service/connexionService/connexion-service.service';
import { EncrDecrService } from '../../service/encrdecrService/encr-decr.service';
import { ApiCallService } from '../../service/api-call/api-call.service';
import { Router } from '@angular/router';
import { UploadService } from '../../service/upload/upload.service'

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private Connexion: ConnexionService,private EncrDecr: EncrDecrService, private apiService: ApiCallService,private router: Router, private upload: UploadService) {}
  Name: string;
  Surname: string;
  Address: string;
  Mail: string;
  Avatar: string;
  Password: string;
  ClientID: string;
  newAddr: string = '';
  fileData: File;
  url: string = 'new-profile-pic/'
  imageChange: any = '';
  passChanged: any = '';
  passError: any = '';
  adrChanged: any = '';
  adrError: any = '';
  fileError: any = '';

  pwdOld: String;
  pwdChange: String;
  pwdConfirm: String;

  localReturn: String = '';

  ngOnInit() {

    this.Name = this.Connexion.getClientName();
    this.Surname = this.Connexion.getClientSurname();
    this.Mail = this.Connexion.getClientMail();
    this.Avatar = this.Connexion.getClientAvatar();
    this.Address = this.Connexion.getClientAddress();
    this.Password = this.Connexion.getClientPassword();
    this.ClientID = this.Connexion.getClientID();
  }

  changePassword(){

    var pwdOld = this.EncrDecr.set(this.pwdOld);
    var pwdChange = this.EncrDecr.set(this.pwdChange);
    var pwdConfirm = this.EncrDecr.set(this.pwdConfirm);

    var url = 'change-password-api';

    if(pwdOld === this.Password){
      if(pwdChange === pwdConfirm){
        this.apiService.callServer(url,[pwdConfirm,this.ClientID])
        .subscribe(resp => {
          console.log(resp);
          if(resp == 'FALSE'){
            this.passError = resp;
          }else{
            this.passChanged = resp;
            this.Connexion.setClientPassword(pwdChange);
          };

        });
      }else{
        this.localReturn = 'Les nouveaux mots de passe ne correspondent pas.'
      }
    }else{
      this.localReturn = 'Votre mot de passe ne correspond pas avec le mot de passe de votre compte.'
    }
  }

  onSubmitAddr(){
    var url = 'change-address-api';

        this.apiService.callServer(url,[this.newAddr,this.ClientID])
        .subscribe(resp => {
          console.log(resp);
          if(resp == 'FALSE'){
            this.adrError = resp;
          }else{
            this.Connexion.setClientAddress(this.newAddr);
            this.Address = this.Connexion.getClientAddress();
          };
        });
  }

  onDisconnect(){
    this.Connexion.disconnect();
    this.router.navigate(['']);
  }

  fileInput(fileInput: any) {
    var fileName = this.upload.upload(<File>fileInput.target.files[0]);

    var valueArray = [
      fileName,
      this.Connexion.getClientID()
    ]

    this.apiService.callServer(this.url,valueArray)
    .subscribe(resp => {
      console.log(resp);
      if(resp == 'FALSE'){
        this.fileError = 'TRUE';
      }else{
        this.Connexion.setClientAvatar(fileName);
        this.Avatar = this.Connexion.getClientAvatar();
      }
    });
  }

}
