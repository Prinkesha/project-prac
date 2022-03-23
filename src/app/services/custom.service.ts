import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
// import { User } from '../User';


@Injectable({
  providedIn: 'root'
})
export class CustomService {

  // newData:any
  // private userData: any = new BehaviorSubject("")
  // data = this.userData.asObservable()
  
  newData:any
  private userData: any = new BehaviorSubject("")
  items = this.userData.asObservable()
 url = 'https://fakestoreapi.com/users'
  constructor(private http : HttpClient) { }

  // addUser(crrData: any) {
  //   const crrArr = this.userData.getValue();
  //   crrData.id = crrArr.length + 1;
  //   const cdata = [...crrArr, crrData];
  //   this.userData.next(cdata)
  // }

   addUser(crrData: any) {
     console.log("add",crrData)
    const crrArr = this.userData.getValue();
    crrData.id = crrArr.length + 1;
    const cdata = [...crrArr, crrData];
    this.userData.next(cdata)
  }



  getUsersByID(id: number) {
    return this.userData.getValue().find((x: any) => x.id == id)
  }

  // findUser(id:any){
  //  return this.http.get(this.url + '/7' + id)
  // }
  
  // getFile(file:any){
  //   return this.userData.getValue().find((x: any) => x.file == file)
  // }
//   updateData(obj: any) {
//     console.log('in update : ', obj);
    
//     const update = this.userData.getValue();
//     console.log('\n update : ', update);
    
//     console.log(obj)
//     update.splice(update.findIndex((x:any)=> x.id == obj.id),1,obj)
//     console.log
//     this.userData.next(update)


//     const userIndex = this.userData.findIndex((x:any) => x.id == obj.id);
//     if (userIndex > -1) {
//       this.userData[userIndex] = {...obj};
//        this.userData.next(update)


//       console.log("update",this.userData)
//       this.userData.next(userData{})
    
//   }
// }


  

}
