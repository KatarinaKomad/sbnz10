import { Injectable } from '@angular/core';
import { Role } from 'src/app/model/korisnik/korisnik';


@Injectable({
  providedIn: 'root'
})
export class KorisnikService {


  getCurrentUserId(): string {
    let userid =  sessionStorage.getItem('user');
    return userid ? userid : ''
  }

  constructor() { }

  getCuurentuserRole(): Role{
    let role = sessionStorage.getItem("role");
    return role? this.arseEnumValueFromString(role) : Role.REGULAR;
  }

  private arseEnumValueFromString(value: string): Role {
    const enumValues = Object.values(Role) as unknown as Role[keyof Role][];
    const enumKey = enumValues.find(key => key === value);
    return enumKey ? Role[enumKey as keyof typeof Role] : Role.REGULAR;
  }

}
