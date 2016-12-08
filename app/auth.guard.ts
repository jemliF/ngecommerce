import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {Observable} from "rxjs/Rx";
import {ClientService} from "./services/client.service";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private clientService:ClientService, private router:Router) {

  }

  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<boolean>|Promise<boolean>|boolean {
    if (this.clientService.isLoggedIn()) {
      console.log('auth guard passed');
      return true;
    } else {
      console.log('blocked by guard passed');
      return false;
    }
  }

}
