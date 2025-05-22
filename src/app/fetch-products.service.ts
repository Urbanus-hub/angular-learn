import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class FetchProductsService {

  constructor(private http:HttpClient) { }
  getProducts():Observable<any>{
    return this.http.get(' https://api.escuelajs.co/api/v1/products')
  }
}
