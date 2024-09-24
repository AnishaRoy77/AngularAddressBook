import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { ModalEditFormComponent } from './modal-edit-form/modal-edit-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalAddFormComponent } from './modal-add-form/modal-add-form.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    PageNotFoundComponent,
   ModalEditFormComponent,
    ModalAddFormComponent,
  
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
  entryComponents: [ ModalEditFormComponent, ModalAddFormComponent ]

})
export class AppModule { }
