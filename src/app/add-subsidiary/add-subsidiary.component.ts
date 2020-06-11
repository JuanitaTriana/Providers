import { Component, OnInit, ViewChild } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'
import Subsidiary from './Subsidiary'
import { MatSnackBar } from '@angular/material/snack-bar'
import { MatDialog } from '@angular/material/dialog'
import { DialogComponent} from '../shared/dialog/dialog.component'
import { SubsidiaryService } from './subsidiary.service'
import { MatTableDataSource } from '@angular/material/table'
import { LoaderService } from '../loader.service'
import { ProductServiceService } from '../Product-Service/product-service.service'
import ProductService from '../Product-Service/ProductService'
import { MatPaginator } from '@angular/material/paginator'
import { MatSort } from '@angular/material/sort'


@Component({
  selector: 'app-add-subsidiary',
  templateUrl: './add-subsidiary.component.html',
  styleUrls: ['./add-subsidiary.component.css']
})
export class AddSubsidiaryComponent implements OnInit {
  isFormOpen: boolean = true;
  panelOpenState: boolean = true;
  providerNic: number = null;
  emptySubsidiary: Subsidiary = {
    name: '',
    email: '',
    direction: '',
    phone: null,
    nic: null,
    city: {
      name: '',
      departament: {
        name: ''
      }
    },
    companyId: {
      nic: null
    }
  }
  subsidiary: Subsidiary = this.emptySubsidiary
  action: string;
  toEdit: number;
  durationInSeconds = 5000;
  text = 'Desea Eliminar esta sucursal';
  leftButton = 'Cancelar';
  rightButton = 'Eliminar';
  actualNic : number = null
  public subsidiaryDetails : Subsidiary[] = [];
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  nameFormControl = new FormControl('', [ Validators.required ])
  addressFormControl = new FormControl('', [ Validators.required ])
  phoneFormControl = new FormControl('', [ Validators.required ])
  stateFormControl = new FormControl('', [ Validators.required ])
  cityFormControl = new FormControl('', [ Validators.required ])

  product: string
  productList: ProductService[]
  emptyProductService: ProductService = {
    branchOfficeCompan: {
      nic: null
    },
    id: null,
    name: '',
    unitMeasure: '',
    value: null,
    product: {
      presentation: '',
      quantity: null
    },
    service: {
      duration: '',
      plan: ''
    }
  }
  productData: ProductService = this.emptyProductService
  public productDetails : ProductService[] = [];
  displayedColumns: string[] = ['id', 'name', 'value', 'unitMeasure', 'presentation', 'quantity', 'duration', 'plan', 'branchOfficeCompan.name']
  dataSource: MatTableDataSource<ProductService>

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator
  @ViewChild(MatSort, {static: true}) sort: MatSort
  
  constructor(private _snackBar: MatSnackBar, public dialog: MatDialog, private subService: SubsidiaryService, private loader: LoaderService, private productService: ProductServiceService) {
    this.getSubs()
  }

  ngOnInit(): void {
    this.providerNic = parseInt(localStorage.getItem('providerNic'))
    this.subsidiary.companyId.nic = this.providerNic
  }

  getSubs(): void {
    this.subService.getAll().subscribe(result => {
      this.subsidiaryDetails = result.filter(subsidiary => subsidiary.companyId.nic === this.providerNic)
    })
  }

  saveSubsidiary(): void {
    if (this.nameFormControl.valid && this.emailFormControl.valid && this.addressFormControl.valid && this.phoneFormControl.valid && this.stateFormControl.valid && this.cityFormControl.valid){
      if (this.action === 'edit'){
        let toEdit: Subsidiary = this.subsidiaryDetails.find(sub => sub.nic === this.toEdit)
        toEdit = this.subsidiary
      }
      this.subService.addSubsidiary(this.subsidiary).subscribe(result => {
        this._snackBar.open('Sucursal Guardada!', 'OK', {duration: this.durationInSeconds})
        this.getSubs()
      })
      this.subsidiary = this.emptySubsidiary
      this.action = 'save'
      this.isFormOpen = false
    }
  }

  editSubsidiary(nic: number): void{
    this.action = 'edit'
    this.toEdit = nic
    this.subsidiary = this.subsidiaryDetails.find(sub => sub.nic === nic)
    this.isFormOpen = true
  }

  openDialog(i: number): void {
    const dialogRef = this.dialog.open(DialogComponent, { data: {
      text: this.text,
      leftButton: this.leftButton,
      rightButton: this.rightButton
    }})

    dialogRef.componentInstance.rbClicked.subscribe(result => {
      console.log(result);
      if (result === 'rbClick'){
        this.deleteSubsidiary(i)
      }
    })
  }

  deleteSubsidiary(nic: number): void {
    this.subService.deleteSubsidiary(nic).subscribe(result => {
      this.getSubs()
    })
    this._snackBar.open('Sucursal Eliminada!', 'OK', {duration: this.durationInSeconds})
  }

  getProd(nic: number): void {
    this.actualNic = nic
    this.productService.getAll().subscribe(result => {
      console.log(result)
      this.productDetails = result.filter(product => product.branchOfficeCompan.nic === nic)
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

  addProd() : void {
    this.productData.branchOfficeCompan.nic = this.actualNic
    this.productService.addProduct(this.productData).subscribe(result => {
      this._snackBar.open('Producto Guardado!', 'OK', {duration: this.durationInSeconds})
      this.getProd(this.actualNic)
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value
    this.dataSource.filter = filterValue.trim().toLowerCase()

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage()
    }
  }
}
