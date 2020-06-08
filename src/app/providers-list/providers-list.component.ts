import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'providers-list',
  templateUrl: './providers-list.component.html',
  styleUrls: ['./providers-list.component.css']
})
export class ProvidersListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goAdd(): void {
    this.router.navigate(['/add-provider'])
  }

}
