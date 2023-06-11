import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NgToastService } from 'ng-angular-popup';
import { Preparat } from 'src/app/model/preparat/preparat';
import { PreparatService } from 'src/app/service/preparat/preparat.service';

@Component({
  selector: 'app-concentration-dialog',
  templateUrl: './concentration-dialog.component.html',
  styleUrls: ['./concentration-dialog.component.scss']
})
export class ConcentrationDialogComponent {
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: Preparat,
    private dialogRef: MatDialogRef<ConcentrationDialogComponent>,
    private preparatService: PreparatService,
    private formBuilder: FormBuilder,
    private toast: NgToastService){}

  concentrationForm = this.formBuilder.group({
    koncentracija: new FormControl(this.data.koncentracija)
  })

  changeConcentration(){
    this.dialogRef.close();
    this.preparatService.changeConcentration(this.data.id, this.concentrationForm.value.koncentracija as number ).subscribe({
      next: (response) => {
        response === null ?
          this.openError("Došlo je do greške, molimo pokušajte ponovo", "") :
          this.data.koncentracija = response
      },
      error: () => this.openError("Došlo je do greške, molimo pokušajte ponovo", "")
    })
  }

  close() {
    this.dialogRef.close();
  }

  openError(message: string, title:string){
    this.toast.error({detail: title, summary:message, position:'tr', duration:3000})
  }
}
