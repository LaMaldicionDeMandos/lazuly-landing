import { Component, OnInit } from '@angular/core';
import { Registration} from './registration';

@Component({
  selector: 'lazuly-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registration = new Registration();

  constructor() { }

  ngOnInit() {
    this.registration.school_name = 'escuela';
  }

}
