import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private data;
    
  

  constructor(private http: HttpClient) {

   
   }


   setData(i) {
    this.data= i;
    ;
  }
 
  getData() {
    
    return this.data;
  }
}
