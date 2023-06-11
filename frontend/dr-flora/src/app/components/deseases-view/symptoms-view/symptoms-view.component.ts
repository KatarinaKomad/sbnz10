import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Bolest } from 'src/app/model/bolest/bolest';

@Component({
  selector: 'app-symptoms-view',
  templateUrl: './symptoms-view.component.html',
  styleUrls: ['./symptoms-view.component.scss']
})
export class SymptomsViewComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public bolest: Bolest,
    private dialogRef: MatDialogRef<SymptomsViewComponent>
  ){ }

  handleClose():void {
    this.dialogRef.close();
  }
}
