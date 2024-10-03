import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { Routes, RouterModule } from '@angular/router';
=======
import { Routes, RouterModule, Route } from '@angular/router';
>>>>>>> origin/main
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

<<<<<<< HEAD
const routes: Routes = [
  {
    path: 'contacts', component: ContactListComponent,
    children: [
      { path: ':id', component: ContactDetailsComponent },
    ]
  },

  { path: '', redirectTo: '/contacts', pathMatch: 'full' }, //change


  { path: "**", component: PageNotFoundComponent },
];

=======


const routes: Routes = [
  {path: 'contacts', component: ContactListComponent,
  children:[
    {path: ':id', component: ContactDetailsComponent},
    ]},
   
  {path:'',redirectTo:'/contacts',pathMatch:'full'},

  
  {path: "**",component:PageNotFoundComponent},

];
>>>>>>> origin/main
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
<<<<<<< HEAD

export class AppRoutingModule { }
export const routingComponents = [ContactListComponent, ContactDetailsComponent, PageNotFoundComponent]

=======
export class AppRoutingModule { }
  
  export const routingComponents = [ContactListComponent, ContactDetailsComponent, PageNotFoundComponent ]
  
>>>>>>> origin/main

