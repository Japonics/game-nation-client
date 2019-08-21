import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operators/map';
import {NbAuthService, NbAuthJWTToken} from '@nebular/auth';
import {NbRoleProvider} from '@nebular/security';
import {Roles} from '../enum/roles';

@Injectable()
export class RoleProvider implements NbRoleProvider {

  constructor(private authService: NbAuthService) {
  }

  public getRole(): Observable<string> {
    return this.authService.onTokenChange()
      .pipe(
        map((token: NbAuthJWTToken) => {
          if (token && token.isValid()) {
            return token.getPayload().role;
          }

          return Roles.QUEST;
        }),
      );
  }

  public hasRole(role: string): Observable<boolean> {
    return this.authService.onTokenChange()
      .pipe(
        map((token: NbAuthJWTToken) => {
          if (token && token.isValid()) {
            return token.getPayload().role === role;
          }

          return Roles.QUEST === role;
        }),
      );
  }
}
