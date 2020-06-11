import { Component, OnInit } from '@angular/core'
import { ProductServiceService } from '../Product-Service/product-service.service'
import { LoaderService } from '../loader.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name: string = '';

  constructor(private productService: ProductServiceService,  private loader: LoaderService) { }

  ngOnInit(): void {
  }

  search(event): void {
    this.loader.enableLoader()
    this.productService.getByName(event.target.value).subscribe(result => {
      console.log(result)
      this.loader.disableLoader()
    },
    error => {
      console.log('Error getting products', error)
      this.loader.disableLoader()
    })
  }
}