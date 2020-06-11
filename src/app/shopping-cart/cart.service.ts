import { Injectable } from '@angular/core'
import { Subject, Observable } from 'rxjs'
import ProductService from '../Product-Service/ProductService';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private subject = new Subject<ProductService[]>();
  cartItems: ProductService[] = [];

  constructor() {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems))
  }

  addToCart(product: ProductService): void {
    this.cartItems.push(product)
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems))
    this.subject.next(this.cartItems)
  }

  removeFromCart(id: number): void {
    const index = this.cartItems.findIndex(item => item.id === id)
    this.cartItems.splice(index, 1)
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems))
    this.subject.next(this.cartItems)
  }

  cartChange(): Observable<ProductService[]> {
    return this.subject.asObservable()
  }

}
