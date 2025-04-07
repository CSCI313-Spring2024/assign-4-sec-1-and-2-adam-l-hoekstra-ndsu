import { Routes } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';

export const routes: Routes = [
    {
        path:"",
        component: ContactListComponent,
        title: "Post List"
    },
    // {
    //     // path: "contact/:id",
    //     // component: ContactEditComponent,
    //     // title: "Contact Edit"
    // }
];
