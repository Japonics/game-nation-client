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

  public isAuthorized: boolean = false;
  public user: IUser = null;
  public menu: NbMenuItem[] = [
    {title: 'test', link: ''},
  ];

  constructor(private _authService: NbAuthService) {
    this._authService
      .isAuthenticated()
      .subscribe(
        () => {
          // this.user = this._authService.get();
          // this.isAuthorized = true;
        },
        () => this.isAuthorized = false
      );

    // this._authService. onLogIn.subscribe((user) => {
    //   this.user = this._authService.getUser();
    //   this.isAuthorized = true;
    // });

    this.menu = [
      {title: 'USER.PROFILE', link: '/profile'},
      {title: 'USER.PROFILE', link: '/admin/dashboard'},
      {title: 'USER.PROFILE', link: '/profile'},
      {title: 'USER.PROFILE', link: '/profile'}
    ];
  }

  public logout(): void {
    // this._authService.logout()
    //   .then(
    //     () => {
    //       this.isAuthorized = false;
    //       this.user = null;
    //     }
    //   );
  }

  public searchResult(data: any): void {
    console.log('test');
  }

  get userAvatar(): string {
    return '';
  }
}
