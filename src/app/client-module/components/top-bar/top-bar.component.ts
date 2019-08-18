import {Component} from '@angular/core';
import {IUser} from '../../../@auth/interfaces/user.interface';
import {NbMenuItem} from '@nebular/theme';
import {NbAuthService} from '@nebular/auth';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {

  public isAuthenticated: boolean = false;
  public user: IUser = null;
  public menu: NbMenuItem[] = [
    {title: 'test', link: ''},
  ];
  public userPictureOnly: boolean = false;

  constructor(private _nbAuthService: NbAuthService) {
    this._nbAuthService
      .isAuthenticated()
      .subscribe(
        (isAuthenticated) => {
          this.isAuthenticated = isAuthenticated;
          this._nbAuthService.getToken()
            .subscribe(token => {
              this.user = token.getPayload();
            });
        },
        () => this.isAuthenticated = false
      );

    this.menu = [
      {title: 'USER.PROFILE', link: '/profile'},
      {title: 'USER.PROFILE', link: '/admin/dashboard'},
      {title: 'USER.PROFILE', link: '/profile'},
      {title: 'USER.PROFILE', link: '/profile'}
    ];
  }

  public logout(): void {
    // TODO add const for auth strategy
    this._nbAuthService.logout('username');
  }

  public searchResult(data: any): void {
    console.log('test');
  }

  get userAvatar(): string {
    return '';
  }
}
