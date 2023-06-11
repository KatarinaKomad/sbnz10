import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/model/korisnik/korisnik';
import { KorisnikService } from 'src/app/service/korisnik/korisnik.service';

@Component({
  selector: 'app-user-home-page',
  templateUrl: './user-home-page.component.html',
  styleUrls: ['./user-home-page.component.scss']
})
export class UserHomePageComponent implements OnInit{

  role: Role = Role.REGULAR;

  constructor(private korisnikService: KorisnikService) {}
  
  ngOnInit(): void {
    this.role = this.korisnikService.getCuurentuserRole();
  }
}
