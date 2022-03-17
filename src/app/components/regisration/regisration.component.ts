import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-regisration',
  templateUrl: './regisration.component.html',
  styleUrls: ['./regisration.component.scss']
})
export class RegisrationComponent implements OnInit {
  userForm: FormGroup;
 
  constructor(private fb:FormBuilder) {
    this.userForm = this.fb.group({
      Firstname: ['', Validators.required],
      Lastname: ['', Validators.required],
      ContactNo: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      // firstName:
      // lastName:['', Validators.required],
      // email: ['', [Validators.required, Validators.email]],
      // llastName:['', Validators.required],
      // Passwor:['', Validators.required],
   })
  }

  ngOnInit(): void {
  }

}
