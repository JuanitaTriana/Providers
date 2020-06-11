import { Component, OnInit } from '@angular/core'
import { LoaderService } from '../loader.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name: string = '';

  constructor(private router: Router, private loader: LoaderService) { }

  ngOnInit(): void {
  }

  search(event): void {
    localStorage.setItem('product', event.target.value)
    this.router.navigate(['/inventory-table'])
  }
}