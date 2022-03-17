import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboaerdComponent } from './components/dashboaerd/dashboaerd.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { LoginComponent } from './components/login/login.component';
import { RegisrationComponent } from './components/regisration/regisration.component';
import { FullLayoutComponent } from './Layout/full-layout/full-layout.component';
import { MainComponent } from './pages/main/main.component';
// import { CustomerFormComponent } from './pages/customer-form/customer-form.component';
// import { CutomerviewComponent } from './pages/cutomerview/cutomerview.component';
// import { MapShowComponent } from './pages/map-show/map-show.component';
// import { MapComponent } from './pages/map/map.component';

const routes: Routes = [
  // {
  //   path:'app',
  //   component:FullLayoutComponent,
  //   children:[
  //     {
  //       path:'dashboard',
  //       component:DashboaerdComponent,
  //     },
    
  //   ],
  // },
  { path: 'registartion', component: RegisrationComponent, },
  { path: 'login', component: LoginComponent, },
  { path: 'forget-password', component: ForgetPasswordComponent, },


  {
    path:'',
    component:FullLayoutComponent,
    loadChildren: () =>import('./pages/pages.module').then(x => x.PagesModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
