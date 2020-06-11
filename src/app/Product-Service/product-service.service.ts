import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { apiUrl } from '../shared/global'
import ProductService from './ProductService';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private service: HttpClient) { }

  readonly url = apiUrl + '/api/v1/productservice';

  getByName(name: string){
    return this.service.get<ProductService[]>(this.url + '/' + name)
  }
  
}
