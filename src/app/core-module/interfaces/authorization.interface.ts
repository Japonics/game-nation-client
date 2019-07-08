import {IUser} from './user.interface';

/**
 * @interface describe response from server for authentication request
 */
export interface IAuthorization {
  token: string;
  user: IUser;
}
