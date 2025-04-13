import { Routes } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { ContactCreateComponent } from './contact-create/contact-create.component';

export const routes: Routes = [
    {
        path:"",
        component: ContactListComponent,
        title: "Post List"
    },
    {
        path: "contact/create",
        component: ContactCreateComponent,
        title: "Contact Create"
    },
    {
        path: "contact/:id",
        component: ContactEditComponent,
        title: "Contact Edit"
    }, 
];
