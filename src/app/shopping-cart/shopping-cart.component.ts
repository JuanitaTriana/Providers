import {Component, OnInit} from '@angular/core';
import { ProductServiceService } from '../Product-Service/product-service.service';
import CartItem from './CartItem';
import { CartService } from './cart.service';
import ProductService from '../Product-Service/ProductService';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit{
  panelOpenState = false;
  input: CartItem;
  cartItems: CartItem[] = [];
  storageCart: ProductService[]

    constructor(private cartService: CartService) {
      this.cartService.cartChange().subscribe(result =>{
        console.log(result)
        this.storageCart = JSON.parse(localStorage.getItem('cartItems'))
        console.log(this.storageCart)
        this.filterByProvider(this.storageCart)
      })
    }

    ngOnInit(){

    }

    filterByProvider(storageCart: ProductService[]) {
      storageCart.forEach(item => {
        this.addToCart({
          subsidiary: item.branchOfficeCompan.name,
          products: [item]
        })
      })
    }

    addToCart(input: CartItem){
      const found = this.cartItems.find(element => element.subsidiary === input.subsidiary);
      console.log(found);
      if (found != undefined){
        input.products.forEach(product => {
          found.products.push(product)
        })
      }else{
        this.cartItems.push(input)
      }
      console.log(this.cartItems)
    }

    getTotal(subsidiary: string): number {
      let total: number = 0
      const {products} = this.cartItems.find(item => item.subsidiary === subsidiary)
      products.forEach(product => total += product.value)
      return total
    }

}
