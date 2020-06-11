import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import Subsidiary from './Subsidiary';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent} from '../shared/dialog/dialog.component'
import { SubsidiaryService } from './subsidiary.service';

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

  constructor(private _snackBar: MatSnackBar, public dialog: MatDialog, private subService: SubsidiaryService) {
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
}
