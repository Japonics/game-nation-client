import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {NbAuthService} from '@nebular/auth';

@Injectable({providedIn: 'root'})
export class IsAuthenticatedGuard implements CanActivate {

  constructor(private _nbAuthService: NbAuthService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this._nbAuthService.isAuthenticated();
  }
}
