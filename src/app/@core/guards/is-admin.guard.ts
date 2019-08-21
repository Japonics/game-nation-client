import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {RoleProvider} from '../providers/role.provider';
import {Roles} from '../enum/roles';

@Injectable({providedIn: 'root'})
export class IsAdminGuard implements CanActivate {

  constructor(private _roleProvider: RoleProvider) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this._roleProvider.hasRole(Roles.ADMIN);
  }
}
