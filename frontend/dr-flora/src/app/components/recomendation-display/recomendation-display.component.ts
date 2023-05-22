import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Preporuka } from 'src/app/model/preporuka/preporuka';

@Component({
  selector: 'app-recomendation-display',
  templateUrl: './recomendation-display.component.html',
  styleUrls: ['./recomendation-display.component.scss']
})
export class RecomendationDisplayComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Preporuka,
    private dialogRef: MatDialogRef<RecomendationDisplayComponent>
 ) { }

}
