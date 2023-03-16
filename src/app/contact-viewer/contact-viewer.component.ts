import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { ApiCallService } from '../../service/api-call/api-call.service';

@Component({
  selector: 'app-contact-viewer',
  templateUrl: './contact-viewer.component.html',
  styleUrls: ['./contact-viewer.component.css']
})
export class ContactViewerComponent implements OnInit {

  id_contact = '';
  contact: any [];
  url: string = 'show_contact-api/';

  constructor(private activatedRoute: ActivatedRoute, private httpService: HttpClient,private apiService: ApiCallService) {
  this.id_contact = this.activatedRoute.snapshot.params.id_contact;
   }

  ngOnInit() {

    var valueArray = [
      this.id_contact
    ];

    this.apiService.callServer(this.url,valueArray)
    .subscribe(resp => {
      //console.log(resp);
      this.contact = resp as string [];
    });

  }

}
