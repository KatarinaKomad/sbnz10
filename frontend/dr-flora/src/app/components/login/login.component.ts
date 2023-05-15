import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{

  formFields = this._formBuilder.group({
    email: new FormControl('', [Validators.email]),
    password: new FormControl(''),
  });

  passwordHidden: boolean = true;

  constructor(private _formBuilder: FormBuilder,
              private toast: NgToastService){

  }

  getErrorMessage() : string {
    return "Message"
  }

  changePasswordHidden() : void{
    this.passwordHidden = !this.passwordHidden;
  }

  onSubmit() : void {
    if (this.formFields.invalid) {
      this.openError("Sva polja moraju biti popunjena","Nevalidan unos");
    } 
    else{
      //beckend poziv
    }
   
  }

  openSuccess(message: string, title:string){
    this.toast.success({detail: title,summary:message,  position:'tr', duration:3000})
  }

  openError(message: string, title:string){
    this.toast.error({detail: title, summary:message, position:'tr', duration:3000})
    }

}
