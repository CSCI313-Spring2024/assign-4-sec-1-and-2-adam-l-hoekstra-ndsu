import { Injectable } from '@angular/core';
import { contacts } from './contact-data';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  contacts = contacts;

  constructor() { }

  getContactById(id: number): Contact {
    return this.contacts.filter(contact => contact.id == id)[0];
  }

  addContact(contact: Contact) {
    this.contacts.push(contact);
  }
}
