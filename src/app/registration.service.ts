import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Registration} from './register/registration';

@Injectable()
export class RegistrationService {

  private url = 'http://localhost:5000/landing/register';

  constructor(private http:HttpClient) { }

  register(registration: Registration) {
    console.log(JSON.stringify(registration));
    this.http.post(this.url, registration).subscribe(
      (data) => console.log(`Response: ${JSON.stringify(data)}`),
      (error) => console.log(`Error: ${JSON.stringify(error)}`));
  }

}
