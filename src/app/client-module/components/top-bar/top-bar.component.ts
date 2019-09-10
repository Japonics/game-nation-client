import {Component} from '@angular/core';
import {IUser} from '../../../@auth/interfaces/user.interface';
import {NbMenuItem} from '@nebular/theme';
import {NbAuthService, NbAuthToken} from '@nebular/auth';
import {TranslateService} from '@ngx-translate/core';
import {NbRoleProvider} from '@nebular/security';
import {Roles} from '../../../@core/enum/roles';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {

  public isAuthenticated: boolean = false;
  public user: IUser = null;
  public menu: NbMenuItem[] = [];
  public userPictureOnly: boolean = false;

  constructor(
    private _nbAuthService: NbAuthService,
    private _translateService: TranslateService,
    private _roleProvider: NbRoleProvider,
  ) {
    this._nbAuthService
      .getToken()
      .subscribe(token => this._processToken(token));

    this._nbAuthService
      .onTokenChange()
      .subscribe(token => this._processToken(token));

    this._translateService.get('USER.PROFILE')
      .subscribe(() => {
        this._roleProvider.getRole()
          .subscribe((role: string) => {
            this.menu = [];

            this.menu.push({title: this._translateService.instant('USER.PROFILE'), link: '/profile'});

            if (role === Roles.ADMIN) {
              this.menu.push({title: this._translateService.instant('USER.ADMIN_DASHBOARD'), link: '/admin'});
            }

            this.menu.push({title: this._translateService.instant('AUTH.LOG_OUT'), link: '/logout'});
          });
      });
  }

  private _processToken(token: NbAuthToken): void {
    if (!token.isValid()) {
      this.isAuthenticated = false;
    }

    this.user = token.getPayload().user_data;
    this.isAuthenticated = true;
  }

  get avatar(): string {
    return this.user && this.user.avatar ? this.user.avatar : '/assets/images/default_avatar.png';
  }
}
