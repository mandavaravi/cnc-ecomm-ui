import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import{Router,ActivatedRoute,ParamMap} from '@angular/router';
import {Mobile,mobileList} from '../electronics'
import {Cart,cartList} from '../electronics'

;@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


mobile:Mobile[]=mobileList;
mcart:Cart[]=cartList;
mycart:Cart[]=cartList;

 constructor(private authService:AuthService,private route:ActivatedRoute,private router:Router) {}

add(product){
console.log(product);
this.authService.login(product)
this.router.navigate(['/cart']); 
}

ngOnInit() {
   this.router.navigate(['/login']); 
 }
}