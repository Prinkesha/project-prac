import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomService } from 'src/app/services/custom.service';
import { environment } from 'src/environments/environment';
import { CustomerFormComponent } from '../customer-form/customer-form.component';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  newData: any = null
  id: number = 0
  // mode: 'card' | 'list' = 'card';
  mode: any
 items:any=[]

  constructor(public modalService: NgbModal, private router: Router, private userService: CustomService,private http:HttpClient) { }

  ngOnInit(): void {
    this.getUserData()
    // this.userService.items.subscribe((x: any) => {
    //   this.items = x;
    //   console.log("ngonit", this.items)
    // })
  }
  openModal() {
    const modalRef = this.modalService.open(CustomerFormComponent);
    modalRef.componentInstance.id = 10;
    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }
  AddData() {
    this.router.navigateByUrl('customer-form')
  }
  changeMode() {
    this.mode = 'card';

  }
  changeMode1() {
    this.mode = 'list';
  }
  getUserData() {
    this.http.get(`${environment.apiEndPoint}`).subscribe((res: any) => {
      this.items = res
    })
  }

}
