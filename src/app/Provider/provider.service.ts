import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { apiUrl } from '../shared/global'
import Provider from './Provider'

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor(private service: HttpClient) { }

  readonly url = apiUrl + '/api/v1/company';

  getAll(){
    return this.service.get<Provider[]>(this.url)
  }

  addProvider(provider: Provider){
    console.log(provider)
    return this.service.post(this.url, provider)
  }

  deleteProvider(nit: string) {
    return this.service.delete(this.url + '/' + nit)
  }

  updateProvider(provider: Provider){
    return this.service.put(this.url + '/'+provider.nic , provider)
  }
}
