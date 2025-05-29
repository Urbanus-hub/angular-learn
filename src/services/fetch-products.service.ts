import { HttpClient } from '@angular/common/http';
import { Injectable ,inject} from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from '../models/productModel';
@Injectable({
  providedIn: 'root'
})
export class FetchProductsService {

  http=inject(HttpClient);
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products');
  }
}
