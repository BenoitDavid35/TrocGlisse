import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

//https://www.code-sample.com/2018/12/angular-7-cryptojs-encrypt-decrypt.html

@Injectable({
  providedIn: 'root'
})
export class EncrDecrService {
  constructor() { }

  //The set method is use for encrypt the value.
  set(value){
    var keys = '123456789$#@$^@1ERFabcdef';
    var key = CryptoJS.enc.Utf8.parse(keys);
    var iv = CryptoJS.enc.Utf8.parse(keys);
    var encrypted = CryptoJS.SHA512(value);
    // var encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(value.toString()), key,
    // {
    //     keySize: 128 / 8,
    //     iv: iv,
    //     mode: CryptoJS.mode.CBC,
    //     padding: CryptoJS.pad.Pkcs7
    // });

    // var values = encrypted.toString().split('/');
    // var retour = '';
    //
    // values.forEach(element =>
    //   retour = retour + element
    // );



    return encrypted.toString();
  }

  //The get method is use for decrypt the value.
  // get(keys, value){
  //   var key = CryptoJS.enc.Utf8.parse(keys);
  //   var iv = CryptoJS.enc.Utf8.parse(keys);
  //   var decrypted = CryptoJS.AES.decrypt(value, key, {
  //       keySize: 128 / 8,
  //       iv: iv,
  //       mode: CryptoJS.mode.CBC,
  //       padding: CryptoJS.pad.Pkcs7
  //   });
  //
  //   return decrypted.toString(CryptoJS.enc.Utf8);
  // }
}
