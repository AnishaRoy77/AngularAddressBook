import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



const routes: Routes = [
  {path: 'contacts', component: ContactListComponent,
  children:[
    {path: ':id', component: ContactDetailsComponent},
    ]},
   
  {path:'',redirectTo:'/contacts',pathMatch:'full'},

  
  {path: "**",component:PageNotFoundComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
  
  export const routingComponents = [ContactListComponent, ContactDetailsComponent, PageNotFoundComponent ]
  

