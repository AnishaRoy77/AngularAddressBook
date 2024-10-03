import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

<<<<<<< HEAD

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

=======
import { ModalEditFormComponent } from './modal-edit-form/modal-edit-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalAddFormComponent } from './modal-add-form/modal-add-form.component';
>>>>>>> origin/main


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    PageNotFoundComponent,
<<<<<<< HEAD
    ContactFormComponent,
  
=======
   ModalEditFormComponent,
    ModalAddFormComponent,
>>>>>>> origin/main
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
<<<<<<< HEAD
  entryComponents: [ ContactFormComponent, ContactDetailsComponent ]
=======
  entryComponents: [ ModalEditFormComponent, ModalAddFormComponent ]
>>>>>>> origin/main

})
export class AppModule { }
