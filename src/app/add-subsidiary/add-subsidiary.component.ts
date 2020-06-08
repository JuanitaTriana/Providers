import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';


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
      alert('Sucursal Guardada'+'\n'+ 'info: '+'\n'+this.name +'\n'+ this.email + this.address + '\n'+ this.addre +'\n'+this.phone+'\n'+this.state+'\n'+this.city) 
    }
  }
}
