import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Preparat, PreparatiMultiselect } from 'src/app/model/preparat/preparat';

@Component({
  selector: 'app-preparati-multiselect-dialog',
  templateUrl: './preparati-multiselect-dialog.component.html',
  styleUrls: ['./preparati-multiselect-dialog.component.scss']
})
export class PreparatiMultiselectDialogComponent {

  originalData: PreparatiMultiselect;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: PreparatiMultiselect,
    private dialogRef: MatDialogRef<PreparatiMultiselectDialogComponent>
  ){ 
    this.originalData = {...data};
  }
  handleSelect(id: number) : void{
    if (this.isSelected(id)) {
      this.data.odabrane_opcije = this.data.odabrane_opcije.filter(i => i!== id)
    }
    else{
      this.data.odabrane_opcije.push(id)
    }
  }

  handleClose():void {
    console.log(this.data.odabrane_opcije)
      this.dialogRef.close(true);
  }
  isSelected(id: number){
    return this.data.odabrane_opcije.includes(id);
  }
}
