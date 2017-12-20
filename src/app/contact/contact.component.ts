import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ContactService } from '../contact.service';
import { Contact } from './contact';

@Component({
  selector: 'lazuly-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact = new Contact();
  errors = {};

  constructor(private contactService: ContactService, private dialog: MatDialog) { }

  ngOnInit() {
  }

  send(): void {
    this.resetErrors();
    if (this.validateAll()) {
      this.contactService.send(this.contact).subscribe(
        (data) => this.openDialog(),
        (error) => console.log(`Error: ${JSON.stringify(error)}`));
    }
  }

  openDialog(): void {
    console.log("Todo ok, mostrar dialogo");
    this.dialog.open(ContactDialog, { width: '400px' });
  }

  private resetErrors() {
    this.errors = {};
  }

  private validateAll():boolean {
    var isValid = true;
    if (!this.validateSchoolName()) isValid = false;
    if (!this.validateFullName()) isValid = false;
    if (!this.validateEmail()) isValid = false;
    if (!this.validateMessage()) isValid = false;

    return isValid;
  }

  private validateExistence(field:string) {
    if (this.contact[field] == null || this.contact[field].length === 0) {
      this.errors[field] = true;
      return false;
    }
    return true;
  }

  private validateSchoolName():boolean {
    return this.validateExistence('school_name');
  }

  private validateFullName():boolean {
    return this.validateExistence('full_name');
  }

  private validateEmail():boolean {
    return this.validateExistence('email');
  }

  private validateMessage():boolean {
    return this.validateExistence('message');
  }

}

@Component({
  selector: 'contact-dialog',
  templateUrl: '../contact-dialog.html',
})
export class ContactDialog {

  constructor(
    public dialogRef: MatDialogRef<ContactDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onOkClick(): void {
    this.dialogRef.close();
  }

}
