import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-provider',
  templateUrl: './add-provider.component.html',
  styleUrls: ['./add-provider.component.css']
})

export class AddProviderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  saveProvider(): void {
    alert('Proveedor Guardado')
  }
  addSubsidiary(): void{
    this.router.navigate(['/add-subsidiary'])
  }

}
