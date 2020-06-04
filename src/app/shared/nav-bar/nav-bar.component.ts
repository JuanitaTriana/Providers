import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router) { }
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
