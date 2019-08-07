import {Component, EventEmitter, Output} from '@angular/core';
import {IUser} from '../../../../client-module/auth/interfaces/user.interface';
import {AuthManagerService} from '../../../../core-module/services/auth-manager.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-top-bar',
  templateUrl: './admin-top-bar.component.html',
  styleUrls: ['./admin-top-bar.component.scss']
})
export class AdminTopBarComponent {

  @Output() onToggleDrawer: EventEmitter<void> = new EventEmitter<void>();

  public isAuthorized: boolean = false;
  public user: IUser = null;

  constructor(private _authManagerService: AuthManagerService,
              private _router: Router) {
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
          this._router.navigate(['/']).then();
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
