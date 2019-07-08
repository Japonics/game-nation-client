import {IUserDto} from './user-dto.interface';

/**
 * @interface describe response from server for authentication request
 */
export interface IAuthorizationDto {
  token: string;
  user: IUserDto;
}
