import { Injectable } from '@angular/core';
import { ContactType } from './model/contact-type.model';

@Injectable({
  providedIn: 'root'
})

export class ContactDataService {
  private contacts: ContactType[] = [
    { id: 1, name: "Anisha Roy ", email: " royanisha701@gmail.com", mobile: " 9831508980", website: " http.technovert.com", address: " Appa Swamy , vadapalani,chennai, Tamil nadu - 60026", },
    { id: 2, name: "Preethika", email: "preethika32@gmail.com", mobile: "6831508980", website: " http.gechnovert.com", address: " Casagrand Swamy , vadapalani,chennai, Tamil nadu - 60026" },
    { id: 3, name: "Swetha", email: " swetha701@gmail.com", mobile: " 9231508980", website: " http.technovert.com", address: " Appa Swamy , vadapalani,chennai, Tamil nadu - 60026" },
    { id: 4, name: "Charan", email: " royanisha701@gmail.com", mobile: " 9831508980", website: " http.technovert.com", address: " Appa Swamy , vadapalani,chennai, Tamil nadu - 60026" },
    { id: 5, name: "Vishnu", email: " royanisha701@gmail.com", mobile: " 9831508980", website: " http.technovert.com", address: " Appa Swamy , vadapalani,chennai, Tamil nadu - 60026" },
    { id: 6, name: "Gowtham", email: " royanisha701@gmail.com", mobile: " 9831508980", website: " http.technovert.com", address: " Appa Swamy , vadapalani,chennai, Tamil nadu - 60026" },
  ];

  constructor() { }

  getContactById(id: number): ContactType | undefined {
    return this.contacts.find(contact => contact.id == id);
  }

  getContacts(): ContactType[] {
    return this.contacts;
  }

  saveContact(contactData: any): void {
    this.contacts.push(contactData);//adding new contact by pushing the contact data
    console.log('contact saved', contactData);
  }

  deleteContact(id: number): void {
    const indx = this.contacts.findIndex(contact => contact.id == id);
    if (indx !== -1) {
      this.contacts.splice(indx, 1);
    }
  }

  updateContact(id: number, updatedContact: ContactType): void {
    const index = this.contacts.findIndex(contact => contact.id === id);
    if (index !== -1) {
      this.contacts[index] = updatedContact;
    }
  }

  generateUniqueId(): number {
    return this.contacts.length > 0 ? Math.max(...this.contacts.map(c => c.id)) + 1 : 1;
  }
}
