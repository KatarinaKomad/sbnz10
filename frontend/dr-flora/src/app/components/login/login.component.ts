import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { LoginService } from 'src/app/service/login/login.service'
import { KorisnikService } from 'src/app/service/korisnik/korisnik.service';

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
              private toast: NgToastService,
              private router: Router,
              private loginService: LoginService){

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
      this.loginService.login({username: this.formFields.controls.email.value as string,
                                  password: this.formFields.controls.password.value as string})
                                  .subscribe({
                                    next: (response) => {
                                      this.loginService.addToSessionStorage(response);
                                      this.router.navigateByUrl('/user')
                                    },
                                    error: (err) => this.openError("Neuspešno logovanje", "Neispravni username ili password")
                                  })
      
    }
   
  }

  openSuccess(message: string, title:string){
    this.toast.success({detail: title,summary:message,  position:'tr', duration:3000})
  }

  openError(message: string, title:string){
    this.toast.error({detail: title, summary:message, position:'tr', duration:3000})
    }

}
