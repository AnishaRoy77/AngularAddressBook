import { Component, OnInit,Input,Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ContactType } from '../interface/contact-type.model';

import { ContactDataService } from '../contact-data.service';

@Component({
  selector: 'app-modal-edit-form',
  templateUrl: './modal-edit-form.component.html',
  styleUrls: ['./modal-edit-form.component.css']
})
export class ModalEditFormComponent implements OnInit {
  @Input() contact: ContactType;
  form:FormGroup;
  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder, private contactDataService: ContactDataService) { }
  ngOnInit() {
     this.form = this.contactDataService.initContactForm(this.contact);//initialising form with pre-fill data
    
    console.log(this.contact);
   
    }
    getErrorMessage(fieldName: string): string {
      return this.contactDataService.getErrorMessage(this.form, fieldName);
      }
      saveEditContact(): void {
        if (this.form.valid) {
        const contactData = this.form.value;
        console.log('Contact data is valid and ready to be saved', contactData);
       
        this.contactDataService.updateContact(contactData.id, contactData);
       
        this.activeModal.close(contactData);
      } else {
        console.log('Form is invalid');
        }
        }
        cancel(): void{
          console.log('cancel button clicked');
          this.activeModal.dismiss('cancel');
        }
      }
      

