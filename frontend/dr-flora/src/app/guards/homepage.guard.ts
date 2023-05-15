import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  export class HomepageGuard implements CanActivate {
  
    constructor(
      private router: Router
    ) {}
  
    canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  
    //   if (!this.userService.isUserLoggedIn()) {
    //     this.router.navigate(['/anon']);
    //     return false;
    //   }
    //   const role = this.userService.getRoleCurrentUserRole();
  
    //   if (role === "ROLE_PASSENGER") {
    //     this.router.navigate(['/passenger']);
    //   } else if (role === "ROLE_ADMIN") {
    //     this.router.navigate(['/admin']);
    //   } else if (role === "ROLE_DRIVER") {
    //     this.router.navigate(['/driver']);
    //   }
      return true;
    }
  
  }