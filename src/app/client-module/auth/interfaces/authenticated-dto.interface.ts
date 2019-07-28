import {IUser} from './user.interface';

export interface IAuthenticatedDto {
  user: IUser;
  token: string;
}
