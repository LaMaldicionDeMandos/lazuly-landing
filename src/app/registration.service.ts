import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

import { Registration} from './register/registration';

@Injectable()
export class RegistrationService {

  private url = `${environment.api_uri}/landing/register`;

  constructor(private http:HttpClient) { }

  register(registration: Registration):Observable<any> {
    console.log(JSON.stringify(registration));
    return this.http.post(this.url, registration);
  }

}
