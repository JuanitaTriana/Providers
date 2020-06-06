import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isHome: boolean = true;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) this.isHome = this.router.url === '/'
    })}
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
