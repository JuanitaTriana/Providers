import { Component, OnInit, ViewChild} from '@angular/core'
import { Router, NavigationEnd } from '@angular/router'
import { LoaderService } from '../loader.service'
import { ProviderService } from '../Provider/provider.service'
import Provider from '../Provider/Provider'
import { MatPaginator } from '@angular/material/paginator'
import { MatSort } from '@angular/material/sort'
import { MatTableDataSource } from '@angular/material/table'
import { MatSnackBar } from '@angular/material/snack-bar'
@Component({
  selector: 'providers-list',
  templateUrl: './providers-list.component.html',
  styleUrls: ['./providers-list.component.css']
})
export class ProvidersListComponent implements OnInit {
  providersList: Provider[]
  displayedColumns: string[] = ['name', 'email', 'direction', 'nic']
  dataSource: MatTableDataSource<Provider>

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator
  @ViewChild(MatSort, {static: true}) sort: MatSort

  constructor(private router: Router, private providerService: ProviderService, private loader: LoaderService) {
    this.loader.enableLoader()
    this.providerService.getAll().subscribe(result => {
      this.providersList = result
      this.dataSource = new MatTableDataSource(result)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort
      this.loader.disableLoader()
    },
    error => {
      console.log('Error getting providers list', error)
      this.loader.disableLoader()
    })
   }

  ngOnInit(): void {
  }

  goAdd(): void {
    this.router.navigate(['/add-provider'])
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value
    this.dataSource.filter = filterValue.trim().toLowerCase()

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage()
    }
  }
}
