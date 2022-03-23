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
      // id: [''],
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
      if (res && this.id === 0) {
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
        this.items.push(res)
        this.userForm.reset()
      } else {
        console.log("data not add")
      }
      this.reference.detectChanges()
    })
  }

  updateUserData(id: number) {
    debugger
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
    this.http.put(`${environment.apiEndPoint}/${id}`, Data).subscribe((res:any) => {
      if (res) {
        this.userForm.reset();
        this.getUserData();
      }
      else {
        alert(res.message)
      }
      console.log("update", res)
    })
  }
 
  editUserData(id: any) {
    console.log("id",id)
    debugger

 if(id != 0){
  this.userForm.patchValue({
    email : id.email,
    username : id.username,
    password : id.password,
      name:{
        firstname : id.name.firstname,
        lastname : id.name.lastname,
      },
      address:{
        city : id.address.city,
        street : id.address.street,
        number : id.address.number,
        zipcode : id.address.zipcode,
          geolocation:{
            lat : id.address.geolocation.lat,
            long : id.address.geolocation.long,
          }
      },
      phone: id.password,
  })
 }else{
   alert("not")
 }
  // let res =  this.editUserInfo = id
  // console.log("rrrr",res)
  debugger
// this.http.get(`${environment.apiEndPoint}/${id}`).subscribe((res) => {

//   this.editUserInfo = res
//   if(this.id && this.id != 0){
//     this.userForm.patchValue({
//       email : id.email,
//       username : id.username,
//       password : id.password,
//         name:{
//           firstname : id.name.firstname,
//           lastname : id.name.lastname,
//         },
//         address:{
//           city : id.address.city,
//           street : id.address.street,
//           number : id.address.number,
//           zipcode : id.address.zipcode,
//             geolocation:{
//               lat : id.address.geolocation.lat,
//               long : id.address.geolocation.long,
//             }
//         },
//         phone: id.password,
//     })
       
//   }else{
//     alert("data not edit")
//   }
 
       
//           // this.editUserInfo.patch(this.userForm.value)
          
//           // this.userForm.push(this.editUserInfo)
//       console.log("res",this.editUserInfo)
//     })
  }

  //delete data
  deleteUserData(id: number) {
    if (confirm('Data deleted successfully')) {
      this.items = this.items.filter((e: any) => e.id !== id)
    }
  }

  saveData() {
    if (this.id && this.id != 0) {
      this.updateUserData(this.id)
    }
    else {
      this.addUserData()
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






// this.userService.findUser(id).subscribe((res:any) => {
    //   this.items =res
    // this.http.get(`${environment.apiEndPoint}/${this.id}`,edata).subscribe((res: any) => {

      // this.items = res
      // console.log("res",res)
    // })


    // this.items.patch(res)
    // this.userForm = this.items
    // console.log("editDtaa", res)
    // console.log("ediform", this.userForm)

    // })
















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