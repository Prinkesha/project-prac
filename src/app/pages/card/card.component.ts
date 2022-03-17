import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { CustomService } from 'src/app/services/custom.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  providers: [NgbCarouselConfig]
})
export class CardComponent implements OnInit {
//   id: any = ''
//   @Input() newData: any = {}
//   constructor(private activatedRoute: ActivatedRoute,private userService: CustomService) {
//     this.id = this.activatedRoute.snapshot.queryParams['id']
//     console.log(this.id)
//   }

//   ngOnInit(): void {
//     this.getData()
//   }
//   getData(){
//     if (this.id) {
//       const data = this.userService.getUsersByID(this.id);
//       console.log("data",data)
//       this.newData = data
//       console.log("newData" , this.newData) 
//     }

//   }

// }

constructor() { }

ngOnInit(): void {
}

}
