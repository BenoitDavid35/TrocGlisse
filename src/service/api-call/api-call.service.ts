import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  baseUrl: string = 'http://vps696635.ovh.net:7777/';

  constructor(private httpService: HttpClient) { }

callServer(url,valueArray){
  console.log(this.baseUrl + url);
  console.log(valueArray);
  return this.httpService.post(this.baseUrl + url, valueArray);
}

}
