import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  forgetForm:FormGroup;
  constructor(private fb:FormBuilder) {
    this.forgetForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    })
   }

  ngOnInit(): void {
  }

}
