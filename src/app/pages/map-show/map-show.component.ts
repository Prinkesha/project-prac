import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-map-show',
  templateUrl: './map-show.component.html',
  styleUrls: ['./map-show.component.scss']
})
export class MapShowComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  changePath(){
    this.router.navigateByUrl('app/map')
  }
}
