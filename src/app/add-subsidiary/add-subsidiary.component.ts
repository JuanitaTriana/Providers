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
  isFormOpen = true;
  panelOpenState = true;
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

  constructor(private _snackBar: MatSnackBar, public dialog: MatDialog, private subService: SubsidiaryService) { }

  ngOnInit(): void {
  }
  saveSubsidiary(): void {
    if (this.nameFormControl.valid && this.emailFormControl.valid && this.addressFormControl.valid && this.phoneFormControl.valid && this.stateFormControl.valid && this.cityFormControl.valid){
      if (this.action === 'edit'){
        let toEdit: Subsidiary = this.subsidiaryDetails[this.toEdit]
        toEdit = this.subsidiary
      } else{
        this.subService.addSubsidiary(this.subsidiary).subscribe(result => console.log(result))
        this.subsidiaryDetails.push(this.subsidiary)
      }
      this.subsidiary = this.emptySubsidiary
      this.action = 'save'
      this.isFormOpen = false
      this._snackBar.open('Sucursal Guardada!', 'OK', {duration: this.durationInSeconds})
    }
  }

  editSubsidiary(i: number): void{
    this.action = 'edit'
    this.isFormOpen = true
    this.toEdit = i
    this.subsidiary = this.subsidiaryDetails[i]
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

  deleteSubsidiary(i: number): void {
    this.subsidiaryDetails.splice(i,1)
    this._snackBar.open('Sucursal Eliminada!', 'OK', {duration: this.durationInSeconds})
  }
}
