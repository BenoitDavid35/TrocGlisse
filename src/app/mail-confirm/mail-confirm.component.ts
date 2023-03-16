import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiCallService } from '../../service/api-call/api-call.service';

@Component({
  selector: 'app-mail-confirm',
  templateUrl: './mail-confirm.component.html',
  styleUrls: ['./mail-confirm.component.css']
})
export class MailConfirmComponent implements OnInit {

  confirm_token: string = '';
  noToken: string = '';
  accountConfirmed: string = '';
  url_confirm: string = 'confirm_account/';
  response: any = '';
  errorConfirm: string = '';

  constructor(private activatedRoute: ActivatedRoute,private apiService: ApiCallService) {
    this.confirm_token = this.activatedRoute.snapshot.params.confirm_token;
  }

  ngOnInit() {
    if(this.confirm_token){
      console.log('confirmtoken: ' + this.confirm_token);
      this.validateAccount(this.confirm_token);
    }else{
      this.noToken = 'TRUE';
    }
  }

  validateAccount(confirm_token) {
    var valueArray = [
      confirm_token
    ];

    this.apiService.callServer(this.url_confirm,valueArray)
      .subscribe(resp => {
        console.log(resp);
        this.response = resp;
        console.log('this.response: ' + this.response);
        if(this.response == 'TRUE'){
            this.accountConfirmed = 'TRUE';
            console.log('accountconfirmed: ' + this.accountConfirmed);
        };
        if(this.response == 'ERROR'){
          this.errorConfirm = 'TRUE';
          console.log('errorconfirm: ' + this.errorConfirm);
        }
      });
    }

}
