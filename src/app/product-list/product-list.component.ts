import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { ApiCallService } from '../../service/api-call/api-call.service';
import { FilterService } from '../../service/filterService/filter.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  id_category = '';
  url: string = 'category-api/';
  arrProductList: any [];
  category: string = '';

  constructor(private activatedRoute: ActivatedRoute, private httpService: HttpClient, private apiService: ApiCallService,private filters: FilterService) {
    this.id_category = this.activatedRoute.snapshot.params.id_category;
  }

    ngOnInit() {

      this.filters.currentCategories.forEach(element => {
        if(element.id == this.id_category){
          this.category = element.name;
        }
      });

      var valueArray = [
        this.id_category,
        this.filters.currentFrenchRegion
      ];

      this.apiService.callServer(this.url,valueArray)
      .subscribe(resp => {
        console.log(resp);
        this.arrProductList = resp as string [];
      });

    }

  }
