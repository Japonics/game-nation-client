import {Injectable} from '@angular/core';
import {NbAuthService, NbAuthToken} from '@nebular/auth';
import {Observable, Subject} from 'rxjs';
import {IUser} from '../../@auth/interfaces/user.interface';
import {IUserDataPayload} from '../../@auth/interfaces/user-data-payload.interface';

@Injectable()
export class UserService {

  private _getUser: Subject<IUser> = new Subject<IUser>();

  constructor(private _nbAuthService: NbAuthService) {
    this._nbAuthService
      .getToken()
      .subscribe((token: NbAuthToken) => this._handleTokenChange(token));

    this._nbAuthService
      .onTokenChange()
      .subscribe((token: NbAuthToken) => this._handleTokenChange(token));
  }

  public getUser(): Observable<IUser> {
    return this._getUser;
  }

  private _handleTokenChange = (token: NbAuthToken): void => {
    if (!token.isValid()) {
      this._getUser.next(null);
      return;
    }

    const rawUserData: string = token.getPayload().user_data;
    const userData: IUserDataPayload = JSON.parse(rawUserData);
    this._getUser.next({
      username: userData.Username,
      email: userData.Email,
      id: token.getPayload().id,
      role: userData.Role,
      avatar: null
    });
  }
}
