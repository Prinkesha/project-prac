import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomService } from 'src/app/services/custom.service';
import { environment } from 'src/environments/environment';
import { CustomerFormComponent } from '../customer-form/customer-form.component';
import { IUser } from './data.modal';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [CustomService]
})
export class MainComponent implements OnInit {
  newData: any = null
  id: number = 0
  mode: any
  items: any = []
  userForm: FormGroup
  editUserInfo: any = null
  edata: any
  constructor(public modalService: NgbModal, private router: Router, private userService: CustomService, private http: HttpClient, private fb: FormBuilder, private reference: ChangeDetectorRef) {
    this.userForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      name: this.fb.group({
        firstname: ['', [Validators.required]],
        lastname: ['', [Validators.required]],
      }),
      address: this.fb.group({
        city: ['', [Validators.required]],
        street: ['', [Validators.required]],
        number: ['', [Validators.required]],
        zipcode: ['', [Validators.required]],
        geolocation: this.fb.group({
          lat: ['', [Validators.required]],
          long: ['', [Validators.required]],

        })
      }),
      phone: ['', [Validators.required]]
    })
  }


  ngOnInit(): void {
    this.getUserData()
  }
  changeMode() {
    this.mode = 'card';
    this.reference.detectChanges()
  }
  changeMode1() {
    this.mode = 'list';
    this.reference.detectChanges()
  }
  getUserData() {
    this.http.get(`${environment.apiEndPoint}`).subscribe((res: any) => {
      this.items = res
      console.log(this.items[0])
    })
  }
  addUserData() {
    const Data: IUser = {
      "email": this.userForm.value.email,
      "username": this.userForm.value.username,
      "password": this.userForm.value.password,
      name: {
        "firstname": this.userForm.value.name.firstname,
        "lastname": this.userForm.value.name.lastname,
      },
      address: {
        "city": this.userForm.value.address.city,
        "street": this.userForm.value.address.street,
        "number": this.userForm.value.address.number,
        "zipcode": this.userForm.value.address.zipcode,
        geolocation: {
          "lat": this.userForm.value.address.geolocation.lat,
          "long": this.userForm.value.address.geolocation.long,
        }
      },
      "phone": this.userForm.value.phone,
    }
    this.http.post(`${environment.apiEndPoint}`, Data).subscribe((res: any) => {
      debugger
      if (res) {
        alert('Data added successfully')
        let res: IUser = {
          email: this.userForm.value.email,
          username: this.userForm.value.username,
          password: this.userForm.value.password,
          name: {
            firstname: this.userForm.value.name.firstname,
            lastname: this.userForm.value.name.lastname,
          },
          address: {
            city: this.userForm.value.address.city,
            street: this.userForm.value.address.street,
            number: this.userForm.value.address.number,
            zipcode: this.userForm.value.address.zipcode,
            geolocation: {
              lat: '-37.3159',
              long: '81.1496'
            }
          },
          phone: this.userForm.value.phone,
        }
        this.userForm.reset()
        this.items.push(res)
      } else {
        console.log("data not add")
        alert("data not add")
      }
      console.log("res", res)
      this.userForm.reset()

      this.reference.detectChanges()
    })
  }

  updateUserData(id: number) {
    const Data : IUser= {
      "email": this.userForm.value.email,
      "username": this.userForm.value.username,
      "password": this.userForm.value.password,
      name: {
        "firstname": this.userForm.value.name.firstname,
        "lastname": this.userForm.value.name.lastname,
      },
      address: {
        "city": this.userForm.value.address.city,
        "street": this.userForm.value.address.street,
        "number": this.userForm.value.address.number,
        "zipcode": this.userForm.value.address.zipcode,
        geolocation: {
          "lat": this.userForm.value.address.geolocation.lat,
          "long": this.userForm.value.address.geolocation.long,
        }
      },
      "phone": this.userForm.value.phone,
    }
    this.http.put(`${environment.apiEndPoint}/${id}`, Data).subscribe((res: any) => {
      if (res) {
        this.getUserData();
        this.userForm.reset();
      }
      else {
        alert(res.message)
      }
    })
  }
  //edit data
  editUserData(id: any) {

    // this.userForm.patchValue({
    //   email : edata.email,
    //   username : edata.username,
    //   password : edata.password,
    //     name:{
    //       firstname : edata.firstname,
    //       lastname : edata.lastname,
    //     },
    //     address:{
    //       lastname : edata.lastname,
    //       lastname : edata.lastname,
    //       lastname : edata.lastname,
    //       lastname : edata.lastname,
    //         geolocation:{
    //             "lat":this.userForm.value.address.geolocation.lat,
    //             "long":this.userForm.value.address.geolocation.long,
    //         }
    //     },
    //     "phone":this.userForm.value.phone,
    // })
    // console.log("editid", id)

    console.log("this",id)
    debugger
    // this.userService.findUser(id).subscribe((res:any) => {
    //   this.items =res
    this.http.get(`${environment.apiEndPoint}/${id}`).subscribe((res: any) => {

      this.items = res
      this.userForm.reset()
      console.log("iddd",id)
    })


    // this.items.patch(res)
    // this.userForm = this.items
    // console.log("editDtaa", res)
    // console.log("ediform", this.userForm)

    // })
  }

  //delete data
  deleteUserData(id: number) {
    console.log("ddddd", id)
    // this.http.delete(`${environment.apiEndPoint}/${id}`).subscribe((res: any) => {
    if (confirm('Data deleted successfully')) {
      this.items = this.items.filter((e: any) => e.id !== id)
    }
    // })
  }

  saveData() {
    if (this.id) {
      this.updateUserData(this.id)
    }
    else {
      this.addUserData();
    }
  }
}









































  // edit data
  // editUserData(id: number) {
  //   console.log("id", id)
  //   debugger
  //   this.http.get(`${environment.apiEndPoint}/${id}`).subscribe((res: any) => {
  //     this.items = res;
  //     console.log("editDta", this.items)
  //   })
  // }























  // updateUserData() {
  //   this.http.put(`${environment.apiEndPoint}`, {
  //     ...this.editUserInfo,
  //     id: this.editUserInfo.id,
  //     ...this.userForm.value
  //   }).subscribe((res: any) => {
  //     if (res.isSuccess) {
  //       this.editUserInfo = null
  //       confirm('Data updated successfully')
  //       this.userForm.reset()
  //       this.getUserData()
  //     } else {
  //       confirm(res.message)
  //     }
  //   })
  // }