import { Injectable } from '@angular/core';
import{Router,ActivatedRoute,ParamMap} from '@angular/router';
import {Cart,cartList} from './electronics'
import {Mobile,mobileList} from './electronics'
import{Observable,Subject} from 'rxjs';

@Injectable()
export class AuthService {

constructor(private route:ActivatedRoute,private router:Router) {}

private startStatusObs= new Subject<boolean>();
private startStatusObs$= this.startStatusObs.asObservable()

startStatus:boolean=false;
length:number;
cart:Cart[]=cartList;
mycart:Cart[]=[];
mobile:Mobile[]=mobileList;

home(){
 this.router.navigate(['/home']);
}

login(product){
 console.log(product);
 this.mycart.push(product)
 console.log(this.mycart);
 this.length=this.mycart.length;
 console.log(this.length);
 this.startStatus=true;
this.startStatusObs.next(this.startStatus);
this.router.navigate(['/login']);
}

logout(product){
 console.log(product);
 this.mycart.push(product)
 console.log(this.mycart);
  this.startStatus=true;
this.startStatusObs.next(this.startStatus);
 this.router.navigate(['/logout']);
}

tv(product){
 console.log(product);
 this.mycart.push(product)
 console.log(this.mycart);
  this.startStatus=true;
this.startStatusObs.next(this.startStatus);
 this.router.navigate(['/tv']);
}
}