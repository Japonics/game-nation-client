import {Component} from '@angular/core';
import {AuthManagerService} from '../../../../core-module/services/auth-manager.service';
import {IUser} from '../../../auth/interfaces/user.interface';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {

  public isAuthorized: boolean = false;
  public user: IUser = null;

  constructor(private _authManagerService: AuthManagerService) {
    this._authManagerService
      .isAuthorized()
      .then(
        () => {
          this.user = this._authManagerService.getUser();
          this.isAuthorized = true;
        },
        () => this.isAuthorized = false
      );

    this._authManagerService.onLogIn.subscribe((user) => {
      this.user = this._authManagerService.getUser();
      this.isAuthorized = true;
    });
  }

  public logout(): void {
    this._authManagerService.logout()
      .then(
        () => {
          this.isAuthorized = false;
          this.user = null;
        }
      );
  }

  public searchResult(data: any): void {
    console.log('test');
  }

  get userAvatar(): string {
    return '';
  }
}
