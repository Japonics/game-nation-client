import {IUser} from './user.interface';

export interface IAuthenticated {
  user: IUser;
  token: string;
}
