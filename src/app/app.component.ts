import { Component } from '@angular/core';
import { LoaderService } from './loader.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoading = false;
  title = 'Providers';

  constructor(private loader: LoaderService) {
    this.loader.getLoaderStatus().subscribe(status => {
      console.log(status)
      this.isLoading = status
    })
  }
}
