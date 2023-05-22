import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Simptom } from 'src/app/model/bolest/simptomi';

@Component({
  selector: 'app-multiselect-dropdown',
  templateUrl: './multiselect-dropdown.component.html',
  styleUrls: ['./multiselect-dropdown.component.scss']
})
export class MultiselectDropdownComponent {

  isOpenOptions : boolean = false;
  b: boolean =  this.data.odabrane_opcije.includes(1)

  openOptions() : void {
    this.isOpenOptions = !this.isOpenOptions
  }

  // @Input()  options? : Simptom[];
  // @Input() placeholder? : String;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { sve_opcije: Simptom[], odabrane_opcije: number[]},
    private dialogRef: MatDialogRef<MultiselectDropdownComponent>
 ) { }

    handleSelect(id: number) : void{
      if (this.data.odabrane_opcije.includes(id)){
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
}
