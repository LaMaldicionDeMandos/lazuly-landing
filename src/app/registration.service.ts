import { Injectable } from '@angular/core';
import { Registration} from './register/registration';

@Injectable()
export class RegistrationService {

  constructor() { }

  register(registration: Registration) {
    console.log(JSON.stringify(registration));
  }

}
