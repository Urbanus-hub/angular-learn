import { computed, Injectable, signal } from '@angular/core';
import { Product } from '../models/productModel';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  cartProducts = signal<Product[]>([]);
  count = computed(() => this.cartProducts().length);

  addToCart(cartProduct: Product) {
    const exists = this.cartProducts().find(p => p.id === cartProduct.id);
    
    if (!exists) {
      // Use set() to update the signal with a new array
      this.cartProducts.set([...this.cartProducts(), {...cartProduct,quantity:1}]);
    }
  }

  // Optional: Add a remove method
  removeFromCart(productId: number) {
    this.cartProducts.set(
      this.cartProducts().filter(p => p.id !== productId)
    );
  }

  // Optional: Add a clear method
  clearCart() {
    this.cartProducts.set([]);
  }
}