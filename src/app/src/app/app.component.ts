import { Component } from '@angular/core';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import {  FormGroup } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Address book';
  public validationForm: FormGroup;
  constructor(
    private modalService: NgbModal,private route: ActivatedRoute, private router: Router) { }

  openAddModal(): void {
    const modalRef = this.modalService.open(ContactFormComponent);
    modalRef.result.then((result) => {
      if (result && result.id) {
        console.log('contacts saved', result);
        this.router.navigate(['/contacts', result.id], { relativeTo: this.route });
      } else {
        console.log('Error')
      }
    });
  }

}
