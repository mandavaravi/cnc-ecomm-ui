import { Component, OnInit } from '@angular/core';
import{Router,ActivatedRoute,ParamMap} from '@angular/router';
import{AuthService} from '../auth.service';
import {Cart,cartList} from '../electronics'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private authService:AuthService,private route:ActivatedRoute,private router:Router) {}

   cart:Cart[]=cartList;


  ngOnInit() {
   
     this.cart=this.authService.mycart;
  }

}