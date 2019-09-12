import {Component} from '@angular/core';
import {NbAuthService, NbAuthToken} from '@nebular/auth';
import {IUser} from '../../../../@auth/interfaces/user.interface';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent {

  public user: IUser = null;

  constructor(
    private _nbAuthService: NbAuthService,
  ) {
  }
}
