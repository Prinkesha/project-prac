import { Component, ContentChild, Input, OnInit, TemplateRef,} from '@angular/core';
import { CardItemDirective } from '../card-item.directive';
import { ListItemDirective } from '../list-item.directive';

@Component({
  selector: 'app-cutomerview',
  templateUrl: './cutomerview.component.html',
  styleUrls: ['./cutomerview.component.scss'],
})
export class CutomerviewComponent implements OnInit {

  @Input() items: any[] = [];
  
  @Input() mode: 'card' | 'list' = 'card';

  @ContentChild(CardItemDirective, {read: TemplateRef}) cardItemTemplate:any;
  @ContentChild(ListItemDirective, {read: TemplateRef}) listItemTemplate:any;


  ngOnInit(): void {
       
  }
}

















// import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';

// import { Router } from '@angular/router';
// import { CustomerFormComponent } from '../customer-form/customer-form.component';
// import { NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
// import { CustomService } from 'src/app/services/custom.service';

// data: any = [];

//   newData:any = null
//   id:number = 0

//   page = 1;
//   pageSize = 4;
//   collectionSize = 0;
//   countries: any[] = [];
//   constructor(private router: Router,public modalService: NgbModal,private userService: CustomService) {

//    }

//   ngOnInit(): void {
//     this.collectionSize = this.data.length
//      this.refreshCountries()
//      this.collectionSize = COUNTRIES.length
//       }
//       refreshCountries() {
//       this.newData = this.data
//       .map((country:any, i:number) => ({id: i + 1, ...country}))
//       .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
//     this.userService.data.subscribe((x: any) => {
//       this.data = x;
//     })

//   }

//   AddData() {
//     this.router.navigateByUrl('customer-form')
//   }

//  openModal() {
//   localStorage.removeItem('currentUserId');
//   const modalRef = this.modalService.open(CustomerFormComponent);
//   modalRef.componentInstance.id = 10;
//   modalRef.result.then((result) => {
//     console.log(result);
//   }).catch((error) => {
//     console.log(error);
//   });
// }

// editData(user: any) {
//   this.router.navigateByUrl(`/customer-form/${user}`)
//   console.log("hjh",user)
// }

// deleteData(id: string) {
//   if (confirm("are you sure want to delete data..?")) {
//     const data = this.data.splice(this.data.findIndex((x:any)=> x.id == id),1)
//     console.log(data)
//   }
// }
// show(idd: string) {
//   this.router.navigateByUrl('/card') , { queryparams : { id : idd } }
// }
// show(id:string){
//   this.router.navigate(['/card'], {
//   queryParams: {
//     id: id
//   }
// })
// }
// }
