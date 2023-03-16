import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { UploadService } from '../../service/upload/upload.service'
import { ConnexionService } from '../../service/connexionService/connexion-service.service';
import { ApiCallService } from '../../service/api-call/api-call.service';
import { Router } from '@angular/router';
import { FilterService } from '../../service/filterService/filter.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  createProductResponse: any [];
  fileData1: File;
  fileData2: File;
  fileData3: File;
  fileData4: File;
  fileData5: File;

  fileValidator1: string = '';
  fileValidator2: string = '';
  fileValidator3: string = '';
  fileValidator4: string = '';
  fileValidator5: string = '';

  url: string = 'create-product-api/';

  productName: string = '';
  productTeaser: string = '';
  productDescription: string = '';
  fileNameValidation: string = '';
  select_category: string = '';
  productPrice: string = '';
  productError: string = '';

  categories = [
    {id: 0, name: "Shortboard"},
    {id: 1, name: "Planches pas cher"},
    {id: 2, name: "Planches en mousse et pour débutants"},
    {id: 3, name: "Longboard"},
    {id: 4, name: "Stand Up Paddle"},
    {id: 5, name: "Mini Malibu"},
    {id: 6, name: "Fish"},
    {id: 7, name: "Hybride"},
    {id: 8, name: "Egg"},
    {id: 9, name: "Evolutive"},
    {id: 10, name: "Gun"},
    {id: 11, name: "Vintage"},
    {id: 12, name: "Retro"},
    {id: 13, name: "Child"}
  ];

  constructor(private apiService: ApiCallService, private router: Router, private httpService: HttpClient, private upload: UploadService,private Connexion: ConnexionService,private filters: FilterService) { }

  ngOnInit() {
    this.filters.currentFrenchRegion = 'null'
  }

  fileInput1(fileInput: any) {
    this.fileValidator1 = 'TRUE';
    this.fileData1 = <File>fileInput.target.files[0];
  }
  fileInput2(fileInput: any) {
    this.fileValidator2 = 'TRUE';
    this.fileData2 = <File>fileInput.target.files[0];
  }
  fileInput3(fileInput: any) {
    this.fileValidator3 = 'TRUE';
    this.fileData3 = <File>fileInput.target.files[0];
  }
  fileInput4(fileInput: any) {
    this.fileValidator4 = 'TRUE';
    this.fileData4 = <File>fileInput.target.files[0];
  }
  fileInput5(fileInput: any) {
    this.fileValidator5 = 'TRUE';
    this.fileData5 = <File>fileInput.target.files[0];
  }

  onSubmit(form){
    this.productName = '';
    this.productTeaser = '';
    this.productDescription = '';
    this.fileNameValidation = '';
    this.select_category = '';
    this.productPrice = '';

    if(form.value.productName){
      if(form.value.productTeaser){
        if(form.value.productDescription){
          if(this.fileValidator1 == 'TRUE'){
            var fileName1 = this.upload.upload(this.fileData1);
          }else{
            this.fileNameValidation = 'TRUE';
          }
          if(fileName1){
            if(this.fileValidator2 == 'TRUE'){
              var fileName2 = this.upload.upload(this.fileData2);
            }else{
              this.fileNameValidation = 'TRUE';
            }
            if(fileName2){
              if(this.fileValidator3 == 'TRUE'){
                var fileName3 = this.upload.upload(this.fileData3);
              }else{
                this.fileNameValidation = 'TRUE';
              }
              if(fileName3){
                if(this.fileValidator4 == 'TRUE'){
                  var fileName4 = this.upload.upload(this.fileData4);
                }else{
                  this.fileNameValidation = 'TRUE';
                }
                if(fileName4){
                  if(this.fileValidator5 == 'TRUE'){
                    var fileName5 = this.upload.upload(this.fileData5);
                  }else{
                    this.fileNameValidation = 'TRUE';
                  }
                  if(fileName5){
                    if(form.value.select_category){
                      if(form.value.productPrice){
                        if(this.isNumber(form.value.productPrice)){
                          var valueArray = [
                            form.value.productName,
                            form.value.productTeaser,
                            form.value.productDescription,
                            fileName1,
                            fileName2,
                            fileName3,
                            fileName4,
                            fileName5,
                            this.Connexion.getClientID(),
                            form.value.select_category,
                            form.value.productPrice,
                            this.filters.currentFrenchRegion
                          ];

                          this.apiService.callServer(this.url,valueArray)
                          .subscribe(resp => {
                            console.log(resp);
                            if(resp == 'TRUE'){
                              this.productError = 'TRUE';
                            }
                            this.router.navigate(['my-products']);
                            return this.createProductResponse.push(resp);
                          });
                        }else{
                          this.productPrice = 'TRUE';
                        }
                      }else{
                        this.productPrice = 'TRUE';
                      }
                    }else{
                      this.select_category = 'TRUE';
                    }
                  }else{
                    this.fileNameValidation = 'TRUE';
                  }
                }else{
                  this.fileNameValidation = 'TRUE';
                }
              }else{
                this.fileNameValidation = 'TRUE';
              }
            }else{
              this.fileNameValidation = 'TRUE';
            }
          }else{
            this.fileNameValidation = 'TRUE';
          }
        }else{
          this.productDescription = 'TRUE';
        }
      }else{
        this.productTeaser = 'TRUE';
      }
    }else{
      this.productName = 'TRUE';
    }
    this.filters.currentFrenchRegion = 'null';
  }

  isNumber(n) { return /^-?[\d.]+(?:e-?\d+)?$/.test(n); }

}
