import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Router } from '@angular/router';
import { RouterLink,RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CartServiceService } from '../../../services/cart-service.service';
import { FetchProductsService } from '../../../services/fetch-products.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  cartservice=inject(CartServiceService);
  fetchProducts=inject(FetchProductsService);
  cartProducts=this.cartservice.cartProducts;
  productNumber=this.cartservice.count;
 
  router=inject(Router);


  active:boolean=true;
  love:boolean=false;
closeCart(bool:boolean){
 this.active=bool;
 console.log(this.active)
}
signUp():void{
this.router.navigate(['/signup']);
}
logIn():void{
this.router.navigate(['/login']);
}

}
