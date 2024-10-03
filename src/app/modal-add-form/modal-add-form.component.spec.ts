import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddFormComponent } from './modal-add-form.component';

describe('ModalAddFormComponent', () => {
  let component: ModalAddFormComponent;
  let fixture: ComponentFixture<ModalAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAddFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
