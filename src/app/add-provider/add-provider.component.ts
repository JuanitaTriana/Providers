import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-add-provider',
  templateUrl: './add-provider.component.html',
  styleUrls: ['./add-provider.component.css']
})

export class AddProviderComponent implements OnInit {
  public name: string;
  public email: string;
  public address: string;
  public addre: string;
  public nit: string;
  public phone: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  saveProvider(): void {
    alert('Proveedor Guardado'+'\n'+ 'provider info: '+'\n'+this.name +'\n'+ this.email + this.address + '\n'+ this.addre +'\n'+this.nit+'\n'+this.phone)
  }
  addSubsidiary(): void{
    this.router.navigate(['/add-subsidiary'])
  }

}
