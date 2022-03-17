import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { CutomerviewComponent } from './cutomerview/cutomerview.component';
import { MainComponent } from './main/main.component';
import { MapShowComponent } from './map-show/map-show.component';
import { MapComponent } from './map/map.component';

const routes: Routes = [
  {path:'', component: MainComponent},
  {path:'main', component: MainComponent},
  {path:'card', component: CardComponent},
  // {path:'customer-form', component: CustomerFormComponent},
  {
    path: "customer-form",
    children: [
      {
        path: "",
        component: CustomerFormComponent
      },
      {
        path: ":id",
        component: CustomerFormComponent
      }
    ]
  },
  {path:'cutomerview', component: CutomerviewComponent},
  {path:'map', component: MapComponent},
  {path:'mapshow', component: MapShowComponent},
  // {path:'scheduling', component: SchedulingComponent},
  // {path:'security', component: SecurityComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
