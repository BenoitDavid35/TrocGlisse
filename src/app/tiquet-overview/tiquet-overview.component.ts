import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../service/api-call/api-call.service';

@Component({
  selector: 'app-tiquet-overview',
  templateUrl: './tiquet-overview.component.html',
  styleUrls: ['./tiquet-overview.component.css']
})
export class TiquetOverviewComponent implements OnInit {

  constructor(private apiService: ApiCallService) { }

  url: string = 'getcontact-api/';
  arrContactList: any [];

  ngOnInit() {

    var valueArray = [];

    this.apiService.callServer(this.url,valueArray)
    .subscribe(resp => {
      console.log(resp);
      this.arrContactList = resp as string [];
    });

  }

}
