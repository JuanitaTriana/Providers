import { Component, Inject, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Dialog from './Dialog'
import { Subject, Observable } from 'rxjs'
import { ReturnStatement } from '@angular/compiler';



@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {

  @Output() rbClicked = new EventEmitter<any>();
  
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Dialog) {}

    rbClick() {
      this.rbClicked.emit('rbClick');
      this.dialogRef.close()
    }
}
