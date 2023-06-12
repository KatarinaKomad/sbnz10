import { Component } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { UserInfo } from 'src/app/model/korisnik/korisnik';
import { UserService } from 'src/app/service/korisnik/user.service';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss']
})
export class ProfileViewComponent {

  logged!: UserInfo;
  constructor(
    private korisnikSerivce: UserService,
    private toast: NgToastService,
  ) {
    this.korisnikSerivce.getLoggedUserInfo().subscribe({
      next: (user: UserInfo) => {
        this.logged = user;
      },
      error: _ => this.openError("Neuspešno dobavljanje podataka", "Pokušajte ponovo kasnije.")
    })
  }

  
  openError(message: string, title:string){
    this.toast.error({detail: title, summary:message, position:'tr', duration:3000})
    }
}
