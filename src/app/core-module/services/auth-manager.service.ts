import {Injectable} from '@angular/core';
import {User} from '../models/user';
import {IUser} from '../interfaces/user.interface';

@Injectable()
export class AuthManagerService {

  private _authenticated: User = null;

  public saveUser(user: IUser): void {
    this._authenticated = new User(user);
  }

  public getUser(): User {
    return this._authenticated;
  }

  public isAuthorized(): Promise<boolean> {
    return new Promise<boolean>(((resolve, reject) => {

      resolve(true);

      if (this._authenticated === null) {
        reject();
      }

      resolve(true);
    }));
  }
}
