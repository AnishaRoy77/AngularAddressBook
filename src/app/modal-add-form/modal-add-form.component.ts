import { Component, OnInit,Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContactDataService } from '../contact-data.service';
import { Router,ActivatedRoute,ParamMap } from '@angular/router';
@Component({
  selector: 'app-modal-add-form',
  templateUrl: './modal-add-form.component.html',
  styleUrls: ['./modal-add-form.component.css']
})
export class ModalAddFormComponent implements OnInit {
  @Input() contact: any;
  contactForm: FormGroup;
  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder,private contactDataservice: ContactDataService, private router: Router) { }

  ngOnInit(): void {
    
    this.contactForm = this.contactDataservice.initContactForm(this.contact);
    }
    getErrorMessage(fieldName: string): string {
    return this.contactDataservice.getErrorMessage(this.contactForm, fieldName);
    }
   
    saveContact(): void {
      if (this.contactForm.valid) {
      const contactData = this.contactForm.value;
      console.log('Contact data is valid and ready to be saved', contactData);
      this.contactDataservice.saveContact(contactData);
      // logic for  after saving so that it navigates to the newly added contact
      const newContactId = contactData.id;
      this.router.navigate(['/contacts',newContactId])
      this.activeModal.close('saved');
      } else {
      console.log('Form is invalid');
      }
      }
      cancel(): void{
        console.log('cancel button clicked');
        this.activeModal.dismiss('cancel');
      }
    }
    
    

  
