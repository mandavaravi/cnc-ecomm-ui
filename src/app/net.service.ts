import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class NetService {

  constructor(private httpClient: HttpClient) { }

  getData(url){
    return this.httpClient.get(url);
  }

 postData(url,data){
    return this.httpClient.post(url,data);
  }

}