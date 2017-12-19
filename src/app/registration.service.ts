import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Registration} from './register/registration';
import {Observable} from "rxjs";

@Injectable()
export class RegistrationService {

  private url = 'http://localhost:5000/landing/register';

  constructor(private http:HttpClient) { }

  register(registration: Registration):Observable<any> {
    console.log(JSON.stringify(registration));
    return this.http.post(this.url, registration);
  }

}
