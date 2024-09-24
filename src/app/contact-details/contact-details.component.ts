import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactDataService } from '../contact-data.service';
import { ContactType } from '../interface/contact-type.model'
import { ModalEditFormComponent } from '../modal-edit-form/modal-edit-form.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
 contact : ContactType | undefined ;
 
 
  constructor(
    private route:ActivatedRoute, private router: Router,
    private contactService: ContactDataService,
    private modalService: NgbModal) { }
    
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
       const id = +params.get('id');
        this.contact = this.contactService.getContactById(id);
       console.log(id)
       
       })
   }
   openEditForm() {
    if(this.contact){
      const modalRef = this.modalService.open(ModalEditFormComponent);
      modalRef.componentInstance.contact = {...this.contact};
      modalRef.result.then((result) => {
        if (result) {
          this.contactService.updateContact(result.id,result);
          this.contact = {...result};
        console.log('Contact updated',this.contact);
        }
        
     
        })
      };
    }
    
    
    
   deleteContact(id: number):void{
    if(window.confirm('Are you sure you want to delete this contact?')){
      const contacts = this.contactService.getContacts();
      const CurrentIndex = contacts.findIndex(contact => contact.id === id);//index current id k find kr rhe
      this.contactService.deleteContact(this.contact.id);

      //logic previous contact khulne k
      if(CurrentIndex > 0){
        const previousContact = contacts[CurrentIndex - 1];
        this.router.navigate(['/contacts',previousContact.id]);
      } else if(contacts.length > 1){
       const nextContact = contacts[0];
       this.router.navigate(['/contacts',nextContact.id]);
      }else{
        this.router.navigate(['/contacts'])
      }
      
      
     
   }
  }
   
  }
  
