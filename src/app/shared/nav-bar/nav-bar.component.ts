import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isHome: boolean = true;

  constructor(private router: Router, route: ActivatedRoute) {
    const url: Observable<ActivatedRoute> = route;
   }
  ngOnInit(): void {
  }
  goHome(): void {
    this.router.navigate(['/'])
  }
  goAdd(): void {
    this.router.navigate(['/add-provider'])
  }
  openCart():void {
    alert('abre el carrito, cuando exista...')
  }

}
