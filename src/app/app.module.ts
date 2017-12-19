import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { RegisterComponent, CongratsDialog } from './register/register.component';
import { RegistrationService} from './registration.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    CongratsDialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule
  ],
  providers: [ RegistrationService ],
  bootstrap: [AppComponent],
  entryComponents: [CongratsDialog]
})
export class AppModule { }
