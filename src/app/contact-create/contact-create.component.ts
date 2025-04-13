import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataService } from '../data.service';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact-create',
  imports: [RouterLink],
  templateUrl: './contact-create.component.html',
  styleUrl: './contact-create.component.css'
})
export class ContactCreateComponent {

  dataService = inject(DataService);

  newContact !: Contact;


  createContact(fname: string, lname: string, pnum: string, email: string) {
    this.dataService.addContact({
      id: this.dataService.contacts.length + 1,
      firstName: fname,
      lastName: lname,
      phoneNumber: pnum,
      email: email
    });
  }

}
