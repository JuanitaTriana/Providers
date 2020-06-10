import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, Validators} from '@angular/forms';
import { ProviderService } from '../Provider/provider.service'
import { LoaderService } from '../loader.service'
import Provider from '../Provider/Provider';

@Component({
  selector: 'app-add-provider',
  templateUrl: './add-provider.component.html',
  styleUrls: ['./add-provider.component.css']
})

export class AddProviderComponent implements OnInit {

  public provider: Provider = {
    name: '',
    email: '',
    direction: '',
    nic: null,
    phone: null
  }

  constructor(private router: Router, private addProviderService: ProviderService, private loader: LoaderService) { }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  nameFormControl = new FormControl('', [Validators.required]);
  addressFormControl = new FormControl('', [Validators.required]);
  nitFormControl = new FormControl('', [Validators.required]);
  phoneFormControl = new FormControl('', [Validators.required]);

  ngOnInit(): void {
  }
  saveProvider(): void {
    if (this.nameFormControl.valid && this.emailFormControl.valid && this.addressFormControl.valid && this.nitFormControl.valid && this.phoneFormControl.valid){
      this.loader.enableLoader()
      this.addProviderService.addProvider(this.provider)
      .subscribe(response => {
        this.router.navigate(['/providers-list'])
        this.loader.disableLoader()
      })
    }
  }
  addSubsidiary(): void{
    if (this.nameFormControl.valid && this.emailFormControl.valid && this.addressFormControl.valid && this.nitFormControl.valid && this.phoneFormControl.valid){
      this.router.navigate(['/add-subsidiary'])
    }
  }

}
