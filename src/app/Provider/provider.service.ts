import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Provider from './Provider';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor(private service: HttpClient) { }

  readonly url = 'http://localhost:8080/api/v1/company';

  getAll(){
    return this.service.get<Provider[]>(this.url);
  }

  addProvider(provider: Provider){
    return this.service.post(this.url, provider);
  }

  deleteProvider(nit: number) {
    return this.service.delete(this.url + '/' + nit);
  }

  updateProvider(provider: Provider){
    return this.service.put(this.url + '/'+provider.nic , provider);
  }
}
