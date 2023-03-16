import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EncrDecrService } from '../../service/encrdecrService/encr-decr.service';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { UploadService } from '../../service/upload/upload.service';
import { ApiCallService } from '../../service/api-call/api-call.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  fileData: File;
  url: string = 'create-account-api/';
  display: string = '';
  userImageError: string = '';
  userAdressError: string = '';
  passwordMissMatch: string = '';
  userPasswordConfirmError: string = '';
  userPasswordError: string = '';
  userEmailError: string = '';
  userSurnameError: string = '';
  userRealNameError: string = '';
  userNameError: string = '';

  constructor(private EncrDecr: EncrDecrService, private router: Router, private httpService: HttpClient, private upload: UploadService, private apiService: ApiCallService) { }

  ngOnInit() {
  }

  fileInput(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
  }

  onSubmit(form){

    this.display = '';
    this.userImageError = '';
    this.userAdressError = '';
    this.passwordMissMatch = '';
    this.userPasswordConfirmError = '';
    this.userPasswordError = '';
    this.userEmailError = '';
    this.userSurnameError = '';
    this.userRealNameError = '';
    this.userNameError = '';

    var fileName = this.upload.upload(this.fileData);

    var password = this.EncrDecr.set(form.value.userPassword);
    var password_confirm = this.EncrDecr.set(form.value.userPasswordConfirm);

    if(password){
      if(password_confirm){
        if(fileName){
          if(form.value.userName){
            if(form.value.userRealName){
              if(form.value.userSurname){
                if(form.value.userEmail){
                  if(form.value.userAdress){
                    if(password === password_confirm){
                      var valueArray = [
                        form.value.userName,
                        form.value.userRealName,
                        form.value.userSurname,
                        form.value.userEmail,
                        password,
                        form.value.userAdress,
                        fileName
                      ]
                      this.apiService.callServer(this.url,valueArray)
                      .subscribe(resp => {
                        console.log(resp);
                        if(resp == 'TRUE'){
                          this.router.navigate(['/mail_confirmation']);
                        }else if(resp == 'FALSE'){
                          this.display = 'Erreur lors de la création de votre compte.';
                        }else if(resp == 'ALREADY_EXIST'){
                          this.display = 'Ce compte existe déjà.';
                        }
                      });
                    }
                  }else{
                    this.userAdressError = 'TRUE';
                  }
                }else{
                  this.userEmailError = 'TRUE';
                }
              }else{
                this.userSurnameError = 'TRUE';
              }
            }else{
              this.userRealNameError = 'TRUE';
            }
          }else{
            this.userNameError = 'TRUE';
          }
        }else{
          this.userImageError = 'TRUE';
        }
      }else{
        this.userPasswordConfirmError = 'TRUE';
      }
    }else{
      this.userPasswordError = 'TRUE';
    }
  }
}
