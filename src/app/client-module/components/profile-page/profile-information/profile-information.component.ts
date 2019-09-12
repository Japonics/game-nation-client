import {Component} from '@angular/core';
import {NbAuthService, NbAuthToken} from '@nebular/auth';
import {IUser} from '../../../../@auth/interfaces/user.interface';

@Component({
  selector: 'app-profile-information',
  templateUrl: './profile-information.component.html',
  styleUrls: ['./profile-information.component.scss']
})
export class ProfileInformationComponent {

  public user: IUser = null;

  constructor(
    private _nbAuthService: NbAuthService,
  ) {
    this._nbAuthService
      .getToken()
      .subscribe(token => this._processToken(token));

    this._nbAuthService
      .onTokenChange()
      .subscribe(token => this._processToken(token));
  }

  private _processToken(token: NbAuthToken): void {
    if (!token.isValid()) {
      this.user = null;
    }

    this.user = token.getPayload().user_data;
  }

  get avatar(): string {
    return this.user && this.user.avatar ? this.user.avatar : '/assets/images/default_avatar.png';
  }
}
