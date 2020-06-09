import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import Subsidiary from './Subsidiary';

@Component({
  selector: 'app-add-subsidiary',
  templateUrl: './add-subsidiary.component.html',
  styleUrls: ['./add-subsidiary.component.css']
})
export class AddSubsidiaryComponent implements OnInit {
  panelOpenState = true;
  public name: string;
  public email: string;
  public address: string;
  public addre: string;
  public phone: string;
  public state: string;
  public city: string;

  public subsidiaryDetails : Subsidiary[] = [];

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  nameFormControl = new FormControl('', [
    Validators.required,
  ]);

  addressFormControl = new FormControl('', [
    Validators.required,
  ]);

  phoneFormControl = new FormControl('', [
    Validators.required,
  ]);

  stateFormControl = new FormControl('', [
    Validators.required,
  ])
  cityFormControl = new FormControl('', [
    Validators.required,
  ])

  constructor() { }

  ngOnInit(): void {
  }
  saveSubsidiary(): void {
    if (this.nameFormControl.valid && this.emailFormControl.valid && this.addressFormControl.valid && this.phoneFormControl.valid && this.stateFormControl.valid && this.cityFormControl.valid){
      this.subsidiaryDetails.push({name: this.name, email: this.email, address: this.address, phone: this.phone, state: this.state, city: this.city})
      alert('Sucursal Guardada!')
      this.name=''
      this.email=''
      this.address=''
      this.addre=''
      this.phone=''
      this.state=''
      this.city='' 
    }
  }

  deleteSubsidiary(i: number): void {
    console.log(i)
    this.subsidiaryDetails.splice(i,1)

  }
}