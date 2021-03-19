import { Injectable } from '@angular/core';

// To work with http requests such as the "post" one
import {HttpClient} from '@angular/common/http';

// To work with interfaces
import {SendingObj} from './interface/translatorInterface';

@Injectable({
  providedIn: 'root'
})
export class TranslatorService {
// Injecting the "HttpClient"
  constructor(
    private http: HttpClient
  ) { }

  // Auth data we would like to send
  // to the Google translate API. The data
  // is a mandatory stuff for the service.
  url = "https://translation.googleapis.com/language/translate/v2?key=";
  key = "";

  // The method:
  // 1 -  receives the input "objToSend" object from the
  //      translator component.
  // 2 -  sends the "objToSend" object to and the auth data to the
  //      Google translate API
  // 3 -  gets the response that goes back to the 
  //      translator component
  getTranslation(objToSend: SendingObj) {
    return this.http.post<SendingObj>(this.url + this.key, objToSend);
  }
}
