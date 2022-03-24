import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomService } from 'src/app/services/custom.service';
import { environment } from 'src/environments/environment';
import { IUser } from './data.modal';
import {ConfirmationService} from 'primeng/api';
import {Message} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [CustomService,ConfirmationService ]
})
export class MainComponent implements OnInit {
  closeResult = '';
  show: boolean = false;
  newData: any = null
  mode: any
  items: any = []
  userForm: FormGroup
  editUserInfo: any = null
  edata: any
  userData: any = null
  msgs: Message[] = [];

    position: string ='';
  constructor(public modalService: NgbModal, private confirmationService: ConfirmationService, private primengConfig: PrimeNGConfig,private router: Router,private userService: CustomService, private http: HttpClient, private fb: FormBuilder, private reference: ChangeDetectorRef) {
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
    this.primengConfig.ripple = true;
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

  //add user data
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
        this.items.push(res)
        this.userForm.reset()
      } else {
        console.log("data not add")
      }
      this.reference.detectChanges()
    })
  }

  //update user data
  updateUserData() {
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
    console.log("data", Data)
    this.http.put(`${environment.apiEndPoint}/${this.userData.id}`, Data).subscribe((res: any) => {
      if (res) {
        this.userForm.reset();
        const findIndex = this.items.findIndex((f: any) => f.id == this.userData.id);
        if (findIndex > -1) {
          this.items[findIndex] = { ...this.items[findIndex], ...Data }
        }
      }
      else {
        alert("data not update")
      }
      console.log("update", res)
    })
  }

  //edit user data
  editUserData(data: any) {
    console.log("editid", data)
    this.userData = data;
    this.userForm.patchValue({
      email: data.email,
      username: data.username,
      password: data.password,
      name: {
        firstname: data.name.firstname,
        lastname: data.name.lastname,
      },
      address: {
        city: data.address.city,
        street: data.address.street,
        number: data.address.number,
        zipcode: data.address.zipcode,
        geolocation: {
          lat: data.address.geolocation.lat,
          long: data.address.geolocation.long,
        }
      },
      phone: data.phone,
    })
    this.reference.detectChanges()
  }

  //reset value 
  resetValue() {
    this.userForm.reset();
  }

  //delete data
  // deleteUserData(id: number) {
  //   if (confirm('Data deleted successfully')) {
  //     this.items = this.items.filter((e: any) => e.id !== id)
      
  //   }
  // }
  //save data
  saveData() {
    console.log("saveid", this.userData)
    if (this.userData) {
      this.updateUserData()
    }
    else {
      this.addUserData()
    }
  }
  
  deleteUserData(id: any) {
    // this.position = position;

    this.confirmationService.confirm({
      message: 'Are you sure you want to delete?',
        header: 'Confirm',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.http.delete(`${environment.apiEndPoint}/${id}`).subscribe((res:any)=>{
            this.items = this.items.filter((e: any) => e.id !== id)
            this.reference.detectChanges()
          })
        },
        
        key: "positionDialog"
    });
}
// deleteUser(id: string) {
//   console.log("delete")
//   debugger
//   this.confirmationService.confirm({
//     message: 'Are you sure you want to delete?',
//     header: 'Confirm',
//     icon: 'pi pi-exclamation-triangle',
//     accept: () => {
//       this.gridservice.delete(id).subscribe(res => {
//         this.userId = this.userId.filter((item: any) => item.id !== id);
//         this.ref.detectChanges()
//       })
//     }
//   })
// }
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