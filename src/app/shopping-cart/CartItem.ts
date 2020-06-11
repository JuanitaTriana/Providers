import ProductService from '../Product-Service/ProductService';

export default interface CartItem {
  subsidiary: string
  products: ProductService[]
}
