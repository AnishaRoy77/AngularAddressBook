import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,ParamMap } from '@angular/router';
import { ContactDataService } from '../contact-data.service';
import { ContactType } from '../interface/contact-type.model';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contact:ContactType[] = [];
  selectedId: number | null = null;
  constructor(private contactService: ContactDataService,
              private route: ActivatedRoute, private router:Router
  ) { } //inject kiye router or activated route ko or service ko 

  ngOnInit() {

   this.contact = this.contactService.getContacts();
   
  }
  
 onSelect(contactId:number):void{
  this.router.navigate(['/contacts',contactId]);
  this.selectedId = contactId;
  //console.log("displaying contactId:",contactId)
   }
 isSelected(contact){
  return contact.id === this.selectedId;
 }

}



