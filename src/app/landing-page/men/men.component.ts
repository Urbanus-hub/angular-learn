// men.component.ts
import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FetchProductsService } from '../../fetch-products.service';

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