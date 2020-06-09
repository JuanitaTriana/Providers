import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import Subsidiary from './Subsidiary';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent} from '../shared/dialog/dialog.component'



@Component({
  selector: 'app-add-subsidiary',
  templateUrl: './add-subsidiary.component.html',
  styleUrls: ['./add-subsidiary.component.css']
})
export class AddSubsidiaryComponent implements OnInit {
  isFormOpen = true;
  panelOpenState = true;
  public name: string;
  public email: string;
  public address: string;
  public addre: string;
  public phone: string;
  public state: string;
  public city: string;
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

  nameFormControl = new FormControl('', [
    Validators.required,
  ]);

  addressFormControl = new FormControl('', [
    Validators.required,
  ]);

  phoneFormControl = new FormControl('', [
    Validators.required,
  ]);

  stateFormControl = new FormControl('', [
    Validators.required,
  ])
  cityFormControl = new FormControl('', [
    Validators.required,
  ])

  constructor(private _snackBar: MatSnackBar, public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  saveSubsidiary(): void {
    if (this.nameFormControl.valid && this.emailFormControl.valid && this.addressFormControl.valid && this.phoneFormControl.valid && this.stateFormControl.valid && this.cityFormControl.valid){
      if (this.action === 'edit'){
        const toEdit = this.subsidiaryDetails[this.toEdit]
        toEdit.name = this.name
        toEdit.email = this.email
        toEdit.address = this.address
        toEdit.addre = this.addre
        toEdit.phone = this.phone
        toEdit.state = this.state
        toEdit.city = this.city
      } else{
        this.subsidiaryDetails.push({name: this.name, email: this.email, address: this.address, phone: this.phone, state: this.state, city: this.city})
      }
      this.name=''
      this.email=''
      this.address=''
      this.addre=''
      this.phone=''
      this.state=''
      this.city='' 
      this.action = 'save'
      this.isFormOpen = false
      this._snackBar.open('Sucursal Guardada!', 'OK', {duration: this.durationInSeconds})
    }
  }

  editSubsidiary(i: number): void{
    this.action = 'edit' 
    this.isFormOpen = true
    this.toEdit = i
    this.name = this.subsidiaryDetails[i].name
    this.email = this.subsidiaryDetails[i].email
    this.address = this.subsidiaryDetails[i].address
    this.addre = this.subsidiaryDetails[i].addre
    this.phone = this.subsidiaryDetails[i].phone
    this.state = this.subsidiaryDetails[i].state
    this.city = this.subsidiaryDetails[i].city
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, { data: {
      text: this.text,
      leftButton: this.leftButton,
      rightButton: this.rightButton
    }})
    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
    })
  }

  deleteSubsidiary(i: number): void {
    this.subsidiaryDetails.splice(i,1)
    this._snackBar.open('Sucursal Eliminada!', 'OK', {duration: this.durationInSeconds})

  }
}