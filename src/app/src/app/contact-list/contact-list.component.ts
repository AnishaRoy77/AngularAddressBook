import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ContactDataService } from '../contact-data.service';
import { ContactType } from '../model/contact-type.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: ContactType[] = [];
  selectedId: number | null = null;
  highestId: number = 0;

  constructor(private contactService: ContactDataService, private route: ActivatedRoute,
    private router: Router) { } //inject required modules and services

  ngOnInit(): void {
    this.contacts = this.contactService.getContacts();
    console.log(this.route);
    if (this.route.firstChild) {
      this.route.firstChild.params.subscribe(params => {
        this.contacts = this.contactService.getContacts();
        let id = +params['id'];
        console.log(id);
        //navigating to the first contact by default when the server  or page reloads
        if (this.contacts.length > 0) {
          if (this.isValidId(id)) {
            this.selectedId = id;
          } else {
            this.router.navigate(['/contacts', this.contacts[0].id])
          }
        } else {
          console.log('no contacts');
        }
        this.selectedId = id;
        //finding the highest id among the present id 
        this.highestId = Math.max(...this.contacts.map(contact => contact.id));
        //condition to check if the id passed in url is greater or smaller than the current highest id
        if (id > this.highestId) {
          this.router.navigate(['/contacts', this.highestId])
        } else {
          this.selectedId = id;
          console.log("Selected ID from child:", this.selectedId)
        }
      });
    } else {
      this.router.navigate(['/contacts', this.contacts[0].id]);
      this.selectedId = this.contacts[0].id;
    }
  }


  //method to determine if a contact with the specified id is present in the contacts array    
  private isValidId(id: number): boolean {
    return this.contacts.some(contact => contact.id == id);
  }
  //method to highlight the currently selected contact
  onSelect(id: number): void {
    this.selectedId = id;
    console.log("Contact selected", this.selectedId);
    this.router.navigate(['/contacts', this.selectedId]);
  }

  isSelected(contact: ContactType): boolean {
    return contact.id === this.selectedId;
  }
}



