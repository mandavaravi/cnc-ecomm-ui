import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import{Router,ActivatedRoute,ParamMap} from '@angular/router';
import {Laptop,laptopList} from '../electronics';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

constructor(private authService:AuthService,private route:ActivatedRoute,private router:Router) {}


laptop:Laptop[]=laptopList;
 
 add(product){
console.log(product);
this.authService.login(product)
this.router.navigate(['/cart']); 
}
  ngOnInit() {
  this.router.navigate(['/logout']);
  
 }
}