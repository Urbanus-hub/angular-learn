// men.component.ts
import { Component, HostListener,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FetchProductsService } from '../../../services/fetch-products.service';
import { CartServiceService } from '../../../services/cart-service.service';

interface Category {
  id: number;
  name: string;
  slug: string;
  image: string;
  creationAt: string;
  updatedAt: string;
}

interface Product {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
  creationAt: string;
  updatedAt: string;
}

@Component({
  selector: 'app-children',
  imports: [CommonModule],
  templateUrl: './children.component.html',
  styleUrl: './children.component.css'
})
export class ChildrenComponent {
 Math=Math;
  ChildrenClothes: Product[] = [];
  displayedProducts: Product[] = [];
  currentIndex = 0;
  itemsPerPage = 4; // Default, will be updated based on screen size
  loading = true;

  constructor(private product: FetchProductsService) {}

  ngOnInit(): void {
    this.calculateItemsPerPage();
    this.product.getProducts().subscribe((data) => {
      this.ChildrenClothes = data;
      this.updateDisplayedProducts();
      this.loading = false;
    });
  }
 cartservice=inject(CartServiceService);
  
  cartProducts=this.cartservice.cartProducts;
   cartProductsNumber=this.cartservice.count;
 addCart(id: number) {
  const product = this.ChildrenClothes.find((prod) => prod.id === id);
  if (!product) {
    console.log("Product not found");
    return;
  }
  console.log("found the product", product);
  this.cartservice.addToCart(product);
  console.log(this.cartProducts())
  console.log(this.cartProductsNumber())
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
    const end = Math.min(this.currentIndex + this.itemsPerPage, this.ChildrenClothes.length);
    this.displayedProducts = this.ChildrenClothes.slice(this.currentIndex, end);
  }

  nextPage() {
    if (this.currentIndex + this.itemsPerPage < this.ChildrenClothes.length) {
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
    return this.currentIndex + this.itemsPerPage < this.ChildrenClothes.length;
  }

  hasPrevPage(): boolean {
    return this.currentIndex > 0;
  }
}