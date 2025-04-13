import { Component, inject, input, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { RouterLink } from '@angular/router';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact-edit',
  imports: [RouterLink],
  templateUrl: './contact-edit.component.html',
  styleUrl: './contact-edit.component.css'
})
export class ContactEditComponent {

  dataService = inject(DataService);

  id = input.required<number>();

  contact !: Contact;

  ngOnInit() {
    this.contact = this.dataService.getContactById(this.id());
  }

  updateContact(fname: string, lname: string, pnum: string, email: string) {
    this.contact.firstName = fname
    this.contact.lastName = lname
    this.contact.phoneNumber = pnum
    this.contact.email = email
  }

}
