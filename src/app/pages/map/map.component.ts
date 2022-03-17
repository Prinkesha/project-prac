import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  items: any = [];
  userForm: FormGroup
  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.userForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      name: this.fb.group({
        firstname: ['', [Validators.required]],
        lastname: ['', [Validators.required]],
      }),
    })
  }

  ngOnInit(): void {
    this.getUserData()
  }


  getUserData() {
    this.http.get(`${environment.apiEndPoint}`).subscribe((res: any) => {
      this.items = res
    })
  }

}
