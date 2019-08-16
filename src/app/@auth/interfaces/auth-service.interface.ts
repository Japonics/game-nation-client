import {ICredentials} from './credentials.interface';
import {Observable} from 'rxjs';
import {IAuthenticated} from './authenticated.interface';

export interface IAuthService {

  loadToken(token: string): void;

  login(credentials: ICredentials): Observable<IAuthenticated>;
}
