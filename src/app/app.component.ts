import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  navlinks: { link: string; active: string; txt: string }[];
  length: number;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.startStatusObs$.subscribe((status) => {
      console.log('Subscribed=' + status);
      this.updateNavBar();
    });
    this.updateNavBar();
  }

  updateNavBar() {
    var mobile = { link: '/login', active: 'active', txt: 'Mobile' };
    var laptop = { link: '/logout', active: 'active', txt: 'Laptop' };
    var tv = { link: '/tv', active: 'active', txt: 'Tv' };
    var cart = { link: '/cart', active: 'active', txt: 'MyCart' };
    this.length = this.authService.length;
    if (this.authService.startStatus)
      this.navlinks = [mobile, laptop, tv, cart];
    else this.navlinks = [mobile, laptop, tv];
  }
}
