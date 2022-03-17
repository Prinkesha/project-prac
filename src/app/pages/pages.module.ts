import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { CardComponent } from './card/card.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { CutomerviewComponent } from './cutomerview/cutomerview.component';
import { MapComponent } from './map/map.component';
import { MapShowComponent } from './map-show/map-show.component';
import { MainComponent } from './main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardItemDirective } from './card-item.directive';
import { ListItemDirective } from './list-item.directive';
import { HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [
    CardComponent,
    CustomerFormComponent,
    CutomerviewComponent,
    // MapComponent,
    MapShowComponent,
    MainComponent,
    CardItemDirective,
    ListItemDirective
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
