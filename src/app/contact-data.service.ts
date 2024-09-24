import { Injectable } from '@angular/core';

import { ContactType } from './interface/contact-type.model';
import { FormBuilder, FormGroup,FormControl,Validators,ReactiveFormsModule } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ContactDataService {
  private  contacts: ContactType[] = [
    {id: 1, name: "Anisha Roy ", email : " royanisha701@gmail.com", mobile : " 9831508980" , website : " http.technovert.com" , address : " Appa Swamy , vadapalani,chennai, Tamil nadu - 60026",},
    {id: 2, name: "Preethika", email: "preethika32@gmail.com", mobile: "6831508980",website : " http.gechnovert.com" , address : " Casagrand Swamy , vadapalani,chennai, Tamil nadu - 60026"},
    {id: 3, name: "Swetha", email: " swetha701@gmail.com", mobile: " 9231508980",website : " http.technovert.com" , address : " Appa Swamy , vadapalani,chennai, Tamil nadu - 60026"},
    {id: 4, name: "Charan", email: " royanisha701@gmail.com", mobile: " 9831508980",website : " http.technovert.com" , address : " Appa Swamy , vadapalani,chennai, Tamil nadu - 60026"},
    {id: 5, name: "Vishnu", email: " royanisha701@gmail.com", mobile: " 9831508980",website : " http.technovert.com" , address : " Appa Swamy , vadapalani,chennai, Tamil nadu - 60026"},
    {id: 6, name: "Gowtham", email: " royanisha701@gmail.com", mobile: " 9831508980",website : " http.technovert.com" , address : " Appa Swamy , vadapalani,chennai, Tamil nadu - 60026"},
  ];
   constructor(private fb : FormBuilder) { }
 
getContactById(id:number):ContactType | undefined{
  
  return this.contacts.find(contact => contact.id == id);
}
initContactForm(contact?: ContactType): FormGroup {
  return this.fb.group({
  id: [contact && contact.id ? contact.id : null], // Use a check for undefined contact
  name: [contact && contact.name ? contact.name : '', [Validators.required]],
  email: [contact && contact.email ? contact.email : '', [Validators.required, Validators.email]], // Email validation
  mobile: [contact && contact.mobile ? contact.mobile : '', [Validators.required, Validators.pattern(/^(?:\s*\d\s*){10}$/)]], // Mobile validation (10 digits)
  website: [contact && contact.website ? contact.website : ''],
  address: [contact && contact.address ? contact.address : ''],
});

  }
  
  // Method to get validation error messages
  getErrorMessage(form: FormGroup, fieldName: string): string {
  const field = form.get(fieldName);
  if (field && field instanceof FormControl && field.hasError('required')) {
  return `${fieldName} is required`;
  }
  if (fieldName === 'email' && field && field.hasError('email')) {
  return 'Please enter a valid email';
  }
  if (fieldName === 'mobile' && field &&field.hasError('pattern')) {
  return 'Please enter a valid 10-digit phone number';
  }
  return '';
  }
  
  saveContact(contactData:any):void{
    this.contacts.push(contactData);
    console.log('contact saved', contactData)
  }
  getContacts(): ContactType[]{
    return this.contacts;
  }
deleteContact(id:number): void{
   const indx = this.contacts.findIndex(contact => contact.id == id);
  if(indx !== -1){
    this.contacts.splice(indx,1)

}
}
// addContact(newContact: ContactType):void{
//   this.contacts.push(newContact);
// }
editContact(updatedContact:any){
  const index = this.contacts.findIndex(contact => contact.id === updatedContact.id);
  if(index !== -1){
    this.contacts[index] = updatedContact;
  }
}
updateContact(id:number, updatedContact: ContactType): void{
  const index = this.contacts.findIndex(contact => contact.id === id);
  if(index !== -1){
    this.contacts[index] = updatedContact;
  }
}
generateUniqueId():number{
  return this.contacts.length > 0 ? Math.max(...this.contacts.map(c => c.id)) + 1:1;
}
 
}
