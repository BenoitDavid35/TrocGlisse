import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpRequest,
  HttpEventType,
  HttpResponse,
} from '@angular/common/http'
import { Subject } from 'rxjs'
import { Observable } from 'rxjs'
//https://malcoded.com/posts/angular-file-upload-component-with-express/

const url = 'http://vps696635.ovh.net:7777/upload-api'

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http: HttpClient) {}

  public upload(file: File) {

    // create a new multipart-form for every file
      const formData: FormData = new FormData();
      var fileName = this.randomName(30);
      var fileExtention = file.name.split('.');
      formData.append('file', file, fileName + '.' + fileExtention[1]);

      // create a http-post request and pass the form
      // tell it to report the upload progress
      const req = new HttpRequest('POST', url, formData, {});

      // send the http-request and subscribe for progress-updates
      this.http.request(req).subscribe(event => {
          console.log(event);
          // Close the progress-stream if we get an answer form the API
      });

    // return the map of progress.observables
    return fileName + '.' + fileExtention[1];
  }

  public randomName(length) {
    //https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

}
