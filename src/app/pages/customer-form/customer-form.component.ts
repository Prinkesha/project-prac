import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
// import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomService } from 'src/app/services/custom.service';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss'],
})
export class CustomerFormComponent implements OnInit {
  closeResult = '';
  userForm: FormGroup;
  userList = [] = []
  public items = '';
  id: number = 0;
  constructor(
    private formbuilder: FormBuilder,
    private userService: CustomService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private activeModal: NgbActiveModal
  ) {
    this.userForm = this.formbuilder.group({
      Name: ['', Validators.required],
      Address: ['', Validators.required],
      Contact: ['', Validators.required],
      OrderNumber: ['', Validators.required],
    });
    this.id = activeRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
  }
  submitData() {
      this.userService.addUser(this.userForm.value);
      this.router.navigate(['/main']);
      this.activeModal.close('Modal Closed');
    }
 

    closeModal() {
      this.activeModal.close('Modal Closed');
    }
}













































// constructor() { }

// ngOnInit(): void {
// }

// submitData() {
//   debugger;
//   if (this.id && this.id != 0) {
//     console.log('check', this.userForm.value.id);
//     this.userService.updateData(this.userForm.value);
//     this.router.navigate(['/main']);
//   } else {
//     this.userService.addUser(this.userForm.value);
//     console.log("first",this.userService)
//     this.router.navigate(['/main']);
//   }

// ngOnInit(): void {
  // this.activeRoute.params.subscribe((x: any) => {
  //   this.id = x['id'];
  //   if (x['id'] != null) {
  //     this.userForm.get('id')?.setValue(x['id']);
  //     const data = this.userService.getUsersByID(this.id);
  //     if (data) {
  //       this.userForm.setValue(data);
  //     }
  //   }
  // });
// }
