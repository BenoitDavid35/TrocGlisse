import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCallService } from '../../service/api-call/api-call.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  arrProductList: any [];
  url: string = 'welcome/';

  constructor(private router: Router,private apiService: ApiCallService) { }

  ngOnInit() {
    var valueArray = [];
    this.apiService.callServer(this.url,valueArray)
      .subscribe(resp => {
        console.log(resp);
        this.arrProductList = resp as string [];
      });
  }

  onClick(){
    this.router.navigate(['/offers']);
  }

}
