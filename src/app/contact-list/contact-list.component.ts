import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataService } from '../data.service';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact-list',
  imports: [RouterLink],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})
export class ContactListComponent implements OnInit {
  dataService = inject(DataService);
  contacts:Contact[] = [];

  ngOnInit() {
    this.contacts = this.dataService.contacts;
    console.log(this.contacts);
  }

  deleteContact(id: number) {
    this.contacts = this.contacts.filter(contact => contact.id != id);
  }
}
