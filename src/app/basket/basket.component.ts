import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  constructor(private httpService: HttpClient) { }

  arrProductList: any [];

  ngOnInit() {
    this.httpService.get('./assets/product-list.json').subscribe(
      data => {
        this.arrProductList = data as string [];	 // FILL THE ARRAY WITH DATA.
        //console.log(this.arrProductList);
        this.getProduct(this.arrProductList[0].product_id);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }

  arrProduct: any;

  getProduct(id){
    this.getRestItems();
  }

  toArray(answers: object) {
    return Object.keys(answers).map(key => answers[key])
  }

  getRestItems(): void {
    this.GetRestItems()
      .subscribe(
        restItems => {
          this.arrProduct = restItems;
          console.log(this.arrProduct);
        }
      )
  }

  GetRestItems() {
    return this.httpService
      .get<any[]>('./assets/product.json')
      .pipe(map(data => data));
  }

}
