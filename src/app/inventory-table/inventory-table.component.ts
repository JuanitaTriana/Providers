import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator'
import { MatSort } from '@angular/material/sort'
import { MatTableDataSource } from '@angular/material/table'
import { MatSnackBar } from '@angular/material/snack-bar'
import { MatDialog } from '@angular/material/dialog'
import { DialogComponent} from '../shared/dialog/dialog.component'

@Component({
  selector: 'app-inventory-table',
  templateUrl: './inventory-table.component.html',
  styleUrls: ['./inventory-table.component.css']
})
export class InventoryTableComponent implements OnInit {
  productServiceList: ProductServiceList[]
  displayedColumns: string[] = ['name', 'email', 'direction', 'nic']
  dataSource: MatTableDataSource<Provider>
  text = 'Desea Eliminar este Proveedor';
  leftButton = 'Cancelar';
  rightButton = 'Eliminar';
  durationInSeconds = 5000;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator
  @ViewChild(MatSort, {static: true}) sort: MatSort

  constructor() { }

  ngOnInit(): void {
  }

}
