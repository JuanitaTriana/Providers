import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Provider from './Provider';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor(private service: HttpClient) { }

  readonly url = 'http://65c72f416091.ngrok.io/api/v1/company';

  getAll(){
    return this.service.get<Provider[]>(this.url);
  }

  addProvider(provider: Provider){
    return this.service.post(this.url, provider);
  }

  deleteProvider(nit: string) {
    return this.service.delete(this.url + '/' + nit);
  }

  updateProvider(provider: Provider){
    return this.service.put(this.url + '/'+provider.nic , provider);
  }
}
