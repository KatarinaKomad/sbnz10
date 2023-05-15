import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

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

  constructor(private _formBuilder: FormBuilder){

  }

  getErrorMessage() : string {
    return "Message"
  }

  changePasswordHidden() : void{
    this.passwordHidden = !this.passwordHidden;
  }

}
