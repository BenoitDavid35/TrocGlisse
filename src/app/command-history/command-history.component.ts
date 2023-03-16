import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { ApiCallService } from '../../service/api-call/api-call.service';
import { ConnexionService } from '../../service/connexionService/connexion-service.service';

@Component({
  selector: 'app-command-history',
  templateUrl: './command-history.component.html',
  styleUrls: ['./command-history.component.css']
})
export class CommandHistoryComponent implements OnInit {

  url: string = 'my-product-list/';
  deleteUrl: string = 'delete-product/';
  arrProductList: any [];
  delError: string = '';
  delSuccess: string = '';

  constructor(private httpService: HttpClient, private apiService: ApiCallService, private Connexion: ConnexionService) { }

  ngOnInit() {
    this.showProducts();
  }

  showProducts(){
    var valueArray = [
      this.Connexion.getClientID()
    ];

    this.apiService.callServer(this.url,valueArray)
    .subscribe(resp => {
      console.log(resp);
      this.arrProductList = resp as string [];
    });
  };

  deleteProduct(product_id){
    var valueArray = [
      product_id
    ];

    this.apiService.callServer(this.deleteUrl,valueArray)
    .subscribe(resp => {
      console.log(resp);
      if(resp == 'FALSE'){
        console.log('delerror');
        this.delError = 'TRUE';
      };
      if(resp == 'TRUE'){
        console.log('delsuccess');
        this.delSuccess = 'TRUE';
      };
    });
    this.showProducts();
  }

}
