import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import{NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NetService } from './net.service';
import {HttpClientModule} from '@angular/common/http';
import { ShortPipe } from './short.pipe';
import { FscoursesPipe } from './fscourses.pipe';
import { DepartmentPipe } from './department.pipe';

import { Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { TopbarComponent } from './topbar/topbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthService } from './auth.service';
import { TvComponent } from './tv/tv.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, NgbModule,HttpClientModule,AppRoutingModule],
  declarations: [ AppComponent, ShortPipe, FscoursesPipe, DepartmentPipe, TopbarComponent,HomeComponent, LoginComponent, LogoutComponent, TvComponent, CartComponent],
  bootstrap: [AppComponent],
  providers: [NetService, AuthService]
})
export class AppModule { }
