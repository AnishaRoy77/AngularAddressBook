import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ContactDataService } from '../contact-data.service';
import { ContactType } from '../model/contact-type.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  @Input() contact: any;  // This will hold the contact details for editing
  contactForm: FormGroup;
  isEditMode: boolean = false;  // To differentiate between add and edit mode

  constructor(
    public activeModal: NgbActiveModal, private contactDataService: ContactDataService, private router: Router) { }

  ngOnInit(): void {
    this.contactForm = this.initContactForm(this.contact);
    this.isEditMode = this.contact ? true : false;
    console.log('Edit mode', this.isEditMode);
  }

  initContactForm(contact?: ContactType): FormGroup {
    return new FormGroup({
      id: new FormControl(contact && contact.id ? contact.id : null), // Use a check for undefined contact
      name: new FormControl(contact && contact.name ? contact.name : '', [Validators.required]),
      email: new FormControl(contact && contact.email ? contact.email : '', [Validators.required, this.emailValidator()]), // Email validation
      mobile: new FormControl(contact && contact.mobile ? contact.mobile : '', [Validators.required, Validators.pattern(/^(?:\s*\d\s*){10}$/)]), // Mobile validation (10 digits)
      website: new FormControl(contact && contact.website ? contact.website : ''),
      address: new FormControl(contact && contact.address ? contact.address : ''),
    });
  }

  //custom validation for email 
  emailValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const valid = emailPattern.test(control.value);
      return valid ? null : { invalidEmail: true };
    };
  }

  //method to save contact
  saveContact(): void {
    if (this.contactForm.valid) {
      const contactData = this.contactForm.value;
      if (this.isEditMode) {
        // If we are editing an existing contact
        this.contactDataService.updateContact(this.contact.id, contactData);
      } else {
        // Generate a unique ID for the new contact
        contactData.id = this.contactDataService.generateUniqueId();
        this.contactDataService.saveContact(contactData);
        const newContactId = contactData.id;
        this.router.navigate(['/contacts', newContactId])
      }
      this.activeModal.close(contactData);
    } else {
      console.log('Form is invalid');
    }
  }

  cancel(): void {
    this.activeModal.dismiss('cancel');
  }

  // Custom error message logic
  // Fetches error messages for specific form fields->

  getErrorMessage(fieldName: string): string {
    const field = this.contactForm.get(fieldName);
    if (field && field instanceof FormControl) {
      if (field.hasError('required')) {
        return `${fieldName} is required`;
      }
      if (fieldName === 'mobile' && field.hasError('pattern')) {
        return 'Please enter a valid 10-digit phone number';
      }
    }
    return ''; // Return an empty string if there are no errors
  }

} 