import { Component, Inject } from '@angular/core';
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
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Dialog) {}

    private subject = new Subject<string>()

    rbClick(): Observable<string> {
      this.subject.next('rbClick')
      return this.subject.asObservable()
    }
}
