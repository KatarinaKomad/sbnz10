import { Injectable, inject } from "@angular/core";
import {ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateChildFn } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
class UserPermitionService {
    constructor(private router: Router) {}

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        //logika kad se dodaju role
        return true;
    }
}
export const UserGuard : CanActivateChildFn =  (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
    return inject(UserPermitionService).canActivate(next, state);
}

//       //   if (!this.userService.isUserLoggedIn()) {
//       //     this.router.navigate(['/anon']);
//       //     return false;
//       //   }
//       //   const role = this.userService.getRoleCurrentUserRole();
    
//       //   if (role === "ROLE_PASSENGER") {
//       //     this.router.navigate(['/passenger']);
//       //   } else if (role === "ROLE_ADMIN") {
//       //     this.router.navigate(['/admin']);
//       //   } else if (role === "ROLE_DRIVER") {
//       //     this.router.navigate(['/driver']);
//       //   }
//         return true;
//       }