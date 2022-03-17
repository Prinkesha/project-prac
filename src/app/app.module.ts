import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbActiveModal, NgbAlertModule, NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { MapComponent } from './pages/map/map.component';
import { MapShowComponent } from './pages/map-show/map-show.component';
import { CardComponent } from './pages/card/card.component';
import { CutomerviewComponent } from './pages/cutomerview/cutomerview.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerFormComponent } from './pages/customer-form/customer-form.component';
import { CustomService } from './services/custom.service';
import { FullLayoutComponent } from './Layout/full-layout/full-layout.component';
import { EmptyLayoutComponent } from './Layout/empty-layout/empty-layout.component';
import { DashboaerdComponent } from './components/dashboaerd/dashboaerd.component';
import { LoginComponent } from './components/login/login.component';
import { RegisrationComponent } from './components/regisration/regisration.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    // MapComponent,
    // MapShowComponent,
    // CardComponent,
    // CutomerviewComponent,
    // CustomerFormComponent,
    FullLayoutComponent,
    MapComponent,
    EmptyLayoutComponent,
    DashboaerdComponent,
    LoginComponent,
    RegisrationComponent,
    ForgetPasswordComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgbPaginationModule,
    NgbAlertModule,
    // HttpClientModule,
    // NgbActiveModal
  ],
  providers: [CustomService,NgbActiveModal],
  bootstrap: [AppComponent]
})
export class AppModule { }
