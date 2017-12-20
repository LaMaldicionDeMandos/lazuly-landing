import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

import { Contact } from './contact/contact';

@Injectable()
export class ContactService {

  private url = `${environment.api_uri}/landing/contact`;

  constructor(private http:HttpClient) { }

  send(contact: Contact):Observable<any> {
    console.log(JSON.stringify(contact));
    return this.http.post(this.url, contact);
  }

}

