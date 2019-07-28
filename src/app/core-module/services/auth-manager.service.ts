import {Injectable} from '@angular/core';
import {USER_STORAGE_KEY, USER_TOKEN_KEY} from '../constants/app.constants';
import {HttpClientService} from './http-client.service';
import {IUser} from '../../client-module/auth/interfaces/user.interface';
import {IAuthenticated} from '../../client-module/auth/interfaces/authenticated.interface';

@Injectable()
export class AuthManagerService {

  private _user: IUser = null;

  constructor(private _httpClientService: HttpClientService) {

  }

  public getUser(): IUser {
    return Object.assign({}, this._user);
  }

  public loginUser(authenticated: IAuthenticated): void {
    localStorage.setItem(USER_TOKEN_KEY, authenticated.token);
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(authenticated.user));
    this._user = Object.assign({}, authenticated.user);
  }

  public logout(): Promise<boolean> {
    return new Promise(((resolve) => {
      localStorage.removeItem(USER_STORAGE_KEY);
      localStorage.removeItem(USER_TOKEN_KEY);

      this._user = null;
      resolve(true);
    }));
  }

  public isAuthorized(): Promise<boolean> {
    return new Promise(((resolve, reject) => {

      const user: string = localStorage.getItem(USER_STORAGE_KEY);
      const token: string = localStorage.getItem(USER_TOKEN_KEY);

      if (user === null || token === null) {
        reject(false);
      }

      this._user = JSON.parse(user);
      this._httpClientService.loadToken(token);
      resolve(true);
    }));
  }

  public isAdmin(): Promise<boolean> {
    return new Promise(((resolve, reject) => {

      if (this._user === null) {
        const user: string = localStorage.getItem(USER_STORAGE_KEY);

        if (user === null) {
          reject(false);
        }

        this._user = JSON.parse(user);
      }

      if (this._user.is_admin) {
        resolve(true);
      }

      reject(false);
    }));
  }
}
