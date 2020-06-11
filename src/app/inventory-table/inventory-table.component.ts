import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator'
import { MatSort } from '@angular/material/sort'
import { MatTableDataSource } from '@angular/material/table'
import { MatSnackBar } from '@angular/material/snack-bar'
import { LoaderService } from '../loader.service';
import { ProductServiceService } from '../Product-Service/product-service.service';
import ProductService from '../Product-Service/ProductService';
import { CartService } from '../shopping-cart/cart.service';

@Component({
  selector: 'app-inventory-table',
  templateUrl: './inventory-table.component.html',
  styleUrls: ['./inventory-table.component.css']
})
export class InventoryTableComponent implements OnInit {
  product: string
  productList: ProductService[]
  displayedColumns: string[] = ['id', 'name', 'value', 'unitMeasure', 'presentation', 'quantity', 'duration', 'plan', 'branchOfficeCompan.name']
  dataSource: MatTableDataSource<ProductService>
  duration = 5000;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator
  @ViewChild(MatSort, {static: true}) sort: MatSort

  constructor(private loader: LoaderService, private productService: ProductServiceService, private _snackBar: MatSnackBar, private cartService: CartService) { }

  ngOnInit(): void {
    this.search()
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value
    this.dataSource.filter = filterValue.trim().toLowerCase()

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage()
    }
  }


  search(): void {
    this.loader.enableLoader()
    this.product = localStorage.getItem('product')
    this.productService.getByName(this.product).subscribe(result => {
      this.productList = result
      this.dataSource = new MatTableDataSource(result)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort
      this.loader.disableLoader()
    },
    error => {
      console.log('Error getting products', error)
      this.loader.disableLoader()
    })
  }

  addCart(id: number): void {
    const product = this.productList.find(product => product.id === id)
    this.cartService.addToCart(product)
    this._snackBar.open('Añadido al Carrito!', 'OK', {duration: this.duration})
  }

}
