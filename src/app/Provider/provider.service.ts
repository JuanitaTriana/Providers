import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { apiUrl } from '../shared/global'
import Provider from './Provider'

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor(private service: HttpClient) { }

<<<<<<< HEAD
  readonly url = 'http://65c72f416091.ngrok.io/api/v1/company';
=======
  readonly url = apiUrl + 'api/v1/company'
>>>>>>> 428b9ff87c7df3bba9d9b2ff8584d17c104af6a2

  getAll(){
    return this.service.get<Provider[]>(this.url)
  }

  addProvider(provider: Provider){
    return this.service.post(this.url, provider)
  }

  deleteProvider(nit: string) {
    return this.service.delete(this.url + '/' + nit)
  }

  updateProvider(provider: Provider){
    return this.service.put(this.url + '/'+provider.nic , provider)
  }
}
