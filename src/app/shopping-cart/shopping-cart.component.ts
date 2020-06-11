import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit{
  panelOpenState = false;

    entrada = {
      name: 'Proveedor D', 
      products: [{name: 'product4', serial: '123'}]
    }

  arrayCarrito = [
    {
      name: 'Proveedor C', 
      products: [
        {name: 'product1', serial: '123'},
        {name: 'product2', serial: '1123'},
        {name: 'product3', serial: '1123'}
      ]
    },
    {
      name: 'Proveedor B', 
      products: [
        {name: 'product1', serial: '123'},
        {name: 'product2', serial: '1123'}
      ]
    }];

    ngOnInit(){
      this.addToCart(this.entrada)
    }

    addToCart(entrada){
      console.log(entrada)
      const found = this.arrayCarrito.find(element => element.name === entrada.name);
      console.log(found);

      if (found != undefined){
        entrada.products.forEach(product => {
          found.products.push(product)
          
        });
        
      }else{
        this.arrayCarrito.push(entrada)

      }

      console.log(this.arrayCarrito)
    }

}
