import { Injectable } from '@angular/core'
import { apiUrl } from '../shared/global'
import { HttpClient } from '@angular/common/http'
import Subsidiary from './Subsidiary'

@Injectable({
  providedIn: 'root'
})
export class SubsidiaryService {

  constructor(private service: HttpClient) { }

  readonly url = apiUrl + 'api/v1/branchoffice'

  getAll(){
    return this.service.get<Subsidiary[]>(this.url)
  }

  addSubsidiary(subsidiary: Subsidiary){
    return this.service.post(this.url, subsidiary)
  }

  deleteSubsidiary(nic: number) {
    return this.service.delete(this.url + '/' + nic)
  }

  updateSubsidiary(subsidiary: Subsidiary){
    return this.service.put(this.url + '/'+ subsidiary.name , subsidiary)
  }
}
