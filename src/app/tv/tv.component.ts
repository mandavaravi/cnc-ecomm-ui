import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import{Router,ActivatedRoute,ParamMap} from '@angular/router';
import {TV,tvList} from '../electronics';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {
constructor(private authService:AuthService,private route:ActivatedRoute,private router:Router) {}


tv:TV[]=tvList;

add(product){
console.log(product);
this.authService.login(product)
this.router.navigate(['/cart']); 
}

  ngOnInit() {
  this.router.navigate(['/tv']);
  
 }
}