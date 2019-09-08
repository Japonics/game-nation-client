import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {ICredentials} from '../interfaces/credentials.interface';
import {IAuthService} from '../interfaces/auth-service.interface';
import {AUTH_ROUTES} from './auth.routes';
import {HttpClientService} from '../../@core/services/http-client.service';
import {IAuthenticatedDto} from '../interfaces/authenticated-dto.interface';
import {IAuthenticated} from '../interfaces/authenticated.interface';
import {IRegisterData} from '../interfaces/register-data.interface';
import {ICredentialsDto} from '../interfaces/credentials-dto.interface';
import {IRegisterDataDto} from '../interfaces/register-data-dto.interface';

@Injectable()
export class AuthService implements IAuthService {

  constructor(private _httpClientService: HttpClientService) {
  }

  public loadToken(token: string): void {
    this._httpClientService.loadToken(token);
  }

  public login(credentials: ICredentials): Observable<IAuthenticated> {

    const credentialsDto: ICredentialsDto = {
      password: credentials.password,
      username: credentials.username
    };

    return this._httpClientService
      .post(AUTH_ROUTES.loginRoute(), credentialsDto)
      .pipe<IAuthenticated, any>(
        map((response: IAuthenticatedDto) => {
          return {
            user: {
              id: response.user.id,
              username: response.user.username,
              email: response.user.email,
              role: response.user.role,
              avatar: response.user.avatar
            },
            token: response.token
          };
        }),
        catchError(err => err)
      );
  }

  public registerUser(registerData: IRegisterData): Observable<void> {

    const registerDataDto: IRegisterDataDto = {
      username: registerData.username,
      email: registerData.email,
      password: registerData.password,
      confirmPassword: registerData.confirmPassword
    };

    return this._httpClientService
      .post(AUTH_ROUTES.registerRoute(), registerDataDto)
      .pipe(
        map(item => item),
        catchError(err => err)
      );
  }

  public logout(): void {
    this._httpClientService.clearToken();
  }
}
