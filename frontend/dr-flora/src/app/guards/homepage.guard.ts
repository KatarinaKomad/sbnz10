import { Injectable, inject } from "@angular/core";
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivateChildFn } from "@angular/router";

@Injectable({
    providedIn: 'root'
  })
  class AnonymousPermissionService {
    constructor(private router: Router) {}

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        //your logic goes here
        return true
    }
  } 
  export const HomepageGuard : CanActivateChildFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
    return inject(AnonymousPermissionService).canActivate(next, state);
  }