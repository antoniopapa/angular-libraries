import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router";
import {Auth} from "./auth";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class Permission implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return Auth.canAccess(route.data.permissions) || false;
  }
}
