import { Component, OnInit } from '@angular/core';
import { Registration } from './registration';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'lazuly-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registration = new Registration();
  errors = {};

  constructor(private registerService: RegistrationService) { }

  ngOnInit() {}

  register(): void {
    this.resetErrors();
    if (this.validateAll()) this.registerService.register(this.registration);
  }

  private resetErrors() {
    this.errors = {};
  }

  private validateAll():boolean {
    var isValid = true;
    if (!this.validateSchoolName()) isValid = false;
    if (!this.validateFirstName()) isValid = false;
    if (!this.validateLastName()) isValid = false;
    if (!this.validateEmail()) isValid = false;
    if (!this.validatePassword()) isValid = false;
    if (!this.validateRePassword()) isValid = false;

    return isValid;
  }

  private validateExistence(field:string) {
    if (this.registration[field] == null || this.registration[field].length === 0) {
      this.errors[field] = true;
      return false;
    }
    return true;
  }

  private validateSchoolName():boolean {
    return this.validateExistence('school_name');
  }

  private validateFirstName():boolean {
    return this.validateExistence('first_name');
  }

  private validateLastName():boolean {
    return this.validateExistence('last_name');
  }

  private validateEmail():boolean {
    return this.validateExistence('email');
  }

  private validatePassword():boolean {
    return this.validateExistence('password');
  }

  private validateRePassword():boolean {
    if (this.registration.password !== this.registration.rePassword) {
      this.errors['rePassword'] = true;
      return false;
    }
    return true;
  }

}
