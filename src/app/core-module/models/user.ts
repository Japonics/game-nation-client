import {IUser} from '../interfaces/user.interface';

export class User {

  private _username: string;
  private _email: string;

  constructor(data: IUser) {
    this._username = data.username;
    this._email = data.email;
  }

  public update(data: IUser): void {
    this._username = data.username;
    this._email = data.email;
  }
}
