import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import {TopbarComponent} from './topbar/topbar.component';
import {TvComponent} from './tv/tv.component';
import {CartComponent} from './cart/cart.component';


const appRoutes:Routes=[
 
 {
    path:'login',
    component : LoginComponent
  },
  {
    path:'logout',
    component :LogoutComponent
  },
  {
    path:'tv',
    component :TvComponent
  },
  {
    path:'cart',
    component :CartComponent
  },
  {
    path:'home',
    component :HomeComponent
  },
   {
    path:'',
    redirectTo : 'home',pathMatch:'full'
  },
];
@NgModule({
  imports:[
    RouterModule.forRoot(appRoutes)
  ],
  exports:[
    RouterModule
  ]
})

export class AppRoutingModule{}