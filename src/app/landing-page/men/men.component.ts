// men.component.ts
import { Component, HostListener,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FetchProductsService } from '../../../services/fetch-products.service';
import { Product } from '../../../models/productModel';
import { CartServiceService } from '../../../services/cart-service.service';

@Component({
  selector: 'app-men',
  imports: [CommonModule],
  templateUrl: './men.component.html',
  styleUrl: './men.component.css'
})
export class MenComponent {
  love:boolean=false;
  id:number[]=[];
 Math=Math;
  menClothes: Product[] = [];
  displayedProducts: Product[] = [];
  currentIndex = 0;
  itemsPerPage = 4; // Default, will be updated based on screen size
  loading = true;
  cartservice=inject(CartServiceService);
  
  cartProducts=this.cartservice.cartProducts;
   cartProductsNumber=this.cartservice.count;
 addCart(id: number) {
  const product = this.menClothes.find((prod) => prod.id === id);
  if (!product) {
    console.log("Product not found");
    return;
  }
  console.log("found the product", product);
  this.cartservice.addToCart(product);
  console.log(this.cartProducts())
  console.log(this.cartProductsNumber())
}
  like(bool:boolean,prodId:number){
this.love=bool;
this.id.push(prodId);
}
 unLike(bool:boolean,prodId:number){
this.love=bool;
this.id.slice(this.id.indexOf(prodId),this.id.indexOf(prodId));
}

  constructor(private product: FetchProductsService) {}

  ngOnInit(): void {
    this.calculateItemsPerPage();
    this.product.getProducts().subscribe((data) => {
      this.menClothes = data;
      this.updateDisplayedProducts();
      this.loading = false;
    });
  }

  @HostListener('window:resize')
  onResize() {
    this.calculateItemsPerPage();
    this.updateDisplayedProducts();
  }

  calculateItemsPerPage() {
    const width = window.innerWidth;
    if (width < 768) {
      this.itemsPerPage = 1;
    } else if (width < 992) {
      this.itemsPerPage = 2;
    } else if (width < 1200) {
      this.itemsPerPage = 3;
    } else {
      this.itemsPerPage = 4;
    }
  }

  updateDisplayedProducts() {
    const end = Math.min(this.currentIndex + this.itemsPerPage, this.menClothes.length);
    this.displayedProducts = this.menClothes.slice(this.currentIndex, end);
  }

  nextPage() {
    if (this.currentIndex + this.itemsPerPage < this.menClothes.length) {
      this.currentIndex += this.itemsPerPage;
      this.updateDisplayedProducts();
    }
  }

  prevPage() {
    if (this.currentIndex - this.itemsPerPage >= 0) {
      this.currentIndex -= this.itemsPerPage;
      this.updateDisplayedProducts();
    }
  }

  hasNextPage(): boolean {
    return this.currentIndex + this.itemsPerPage < this.menClothes.length;
  }

  hasPrevPage(): boolean {
    return this.currentIndex > 0;
  }
  
}