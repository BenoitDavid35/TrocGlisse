import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { ApiCallService } from '../../service/api-call/api-call.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { ConnexionService } from '../../service/connexionService/connexion-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  id_product = '';
  id_category = '';
  products: any;
  commentaries: any[];
  FileName1: string;
  FileName2: string;
  FileName3: string;
  FileName4: string;
  FileName5: string;
  FileNameSwap: string;
  title: string;
  message: string;
  submitted: any[];
  url: string = 'product-api/';
  url_getCommentary: string = 'get_product_commentary/';
  url_setCommentary: string = 'set_product_commentary/';
  favoriteUrl: string = 'new-favorite/';
  favoriteRemoveUrl: string = 'remove-favorite/';
  favoriteResponse: any[];

  constructor(private activatedRoute: ActivatedRoute, private httpService: HttpClient,private apiService: ApiCallService, private router: Router, private Connexion: ConnexionService) {
    this.id_category = this.activatedRoute.snapshot.params.id_category;
    this.id_product = this.activatedRoute.snapshot.params.id_product;
  }

  ngOnInit() {
    this.GetRestItems();
  }

  GetRestItems() {

    var valueArray = [
      this.id_product
    ]

    var valueArrayCommentary = [
      this.id_product
    ]

    this.apiService.callServer(this.url,valueArray)
      .subscribe(resp => {
        console.log(resp);
        this.products = resp,
        this.FileName1 = this.products.FileName1,
        this.FileName2 = this.products.FileName2,
        this.FileName3 = this.products.FileName3,
        this.FileName4 = this.products.FileName4,
        this.FileName5 = this.products.FileName5

        this.apiService.callServer(this.url_getCommentary,valueArrayCommentary)
          .subscribe(resp => {
            console.log(resp);
            this.commentaries = resp as string[];
          });

      });
    }

  changePicture(fileNameValue){

    if(fileNameValue == '2'){
      this.FileNameSwap = this.FileName1;
      this.FileName1 = this.FileName2;
      this.FileName2 = this.FileNameSwap;
    }
    if(fileNameValue == '3'){
      this.FileNameSwap = this.FileName1;
      this.FileName1 = this.FileName3;
      this.FileName3 = this.FileNameSwap;
    }
    if(fileNameValue == '4'){
      this.FileNameSwap = this.FileName1;
      this.FileName1 = this.FileName4;
      this.FileName4 = this.FileNameSwap;
    }
    if(fileNameValue == '5'){
      this.FileNameSwap = this.FileName1;
      this.FileName1 = this.FileName5;
      this.FileName5 = this.FileNameSwap;
    }
  }

  sendCommentary(){
    this.apiService.callServer(this.url_setCommentary,[this.id_product,this.title,this.message])
    .subscribe(resp => {
      this.submitted = resp as string [];
      if(this.submitted != null){
        this.router.navigate(['/product/' + this.id_category + '/' + this.id_product]);
      }
    });
  }

  addNewFavorite(product_id){
    var valueArray = [
      this.Connexion.getClientID(),
      product_id
    ];

    this.apiService.callServer(this.favoriteUrl,valueArray)
    .subscribe(resp => {
      console.log(resp);
      this.favoriteResponse = resp as string [];
    });
    this.GetRestItems();
  }

  removeFavorite(product_id){
    var valueArray = [
      this.Connexion.getClientID(),
      product_id
    ];

    this.apiService.callServer(this.favoriteRemoveUrl,valueArray)
    .subscribe(resp => {
      console.log(resp);
      this.favoriteResponse = resp as string [];
    });
    this.GetRestItems();
  }

}
