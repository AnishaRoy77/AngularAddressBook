import { Component } from '@angular/core';
import { ModalAddFormComponent } from './modal-add-form/modal-add-form.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ContactDataService } from './contact-data.service';
import { Router,ActivatedRoute,ParamMap } from '@angular/router';
import { FormBuilder, FormGroup,FormControl,Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Address book';
  public validationForm: FormGroup;
  constructor(
    private modalService: NgbModal, private contactService: ContactDataService, private route: ActivatedRoute, private router:Router
    ) {
    
     }
   
      openAddModal(): void {
        const modalRef = this.modalService.open(ModalAddFormComponent);
        modalRef.componentInstance.contact = {
        id:
        this.contactService.generateUniqueId(),
        name: '',
        email: '',
        mobile: '',
        website: '',
        address: ' '
        };
        
         modalRef.result.then((result) => {
          if (result && result.id) {
            
          console.log('contacts saved',result);
          this.router.navigate(['/contacts',result.id], {relativeTo:this.route});
          }else{
            console.log('Error')
          }
          });
        }
        
}
