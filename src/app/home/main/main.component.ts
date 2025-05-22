// main.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  discount?: number;
}

interface Category {
  id: number;
  name: string;
  image: string;
}

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {
  username: string = 'User';
  featuredProducts: Product[] = [];
  trendingCategories: Category[] = [];
  recommendedProducts: Product[] = [];
  bannerMessage: string = 'Summer Sale: Up to 50% Off!';
  
  ngOnInit() {
    // In a real application, these would come from a service
    this.loadMockData();
  }

  loadMockData() {
    // Mock data for demonstration
    this.username = 'Alex';
    
    this.trendingCategories = [
      { id: 1, name: 'Summer Collection', image: '../../../../public/boyFashion.png' },
      { id: 2, name: 'Formal Wear', image: '../../../../public/boyFashion.png' },
      { id: 3, name: 'Activewear', image: '../../../../public/boyFashion.png' },
      { id: 4, name: 'Accessories', image: '../../../../public/boyFashion.png' }
    ];
    
    this.featuredProducts = [
      { id: 101, name: 'Floral Summer Dress', category: 'Dresses', price: 59.99, image: '../../../../public/boyFashion.png', discount: 15 },
      { id: 102, name: 'Classic White Shirt', category: 'Tops', price: 39.99, image: '../../../../public/boyFashion.png' },
      { id: 103, name: 'Slim Fit Jeans', category: 'Bottoms', price: 49.99, image: '../../../../public/boyFashion.png', discount: 10 },
      { id: 104, name: 'Leather Jacket', category: 'Outerwear', price: 129.99, image: '../../../../public/boyFashion.png' }
    ];
    
    this.recommendedProducts = [
      { id: 201, name: 'Cotton T-Shirt', category: 'Tops', price: 24.99, image: '../../../../public/boyFashion.png' },
      { id: 202, name: 'Pleated Skirt', category: 'Bottoms', price: 34.99, image: '../../../../public/boyFashion.png', discount: 20 },
      { id: 203, name: 'Canvas Sneakers', category: 'Footwear', price: 44.99, image:'../../../../public/boyFashion.png' },
      { id: 204, name: 'Crossbody Bag', category: 'Accessories', price: 29.99, image:'../../../../public/boyFashion.png', discount: 5 }
    ];
  }
}