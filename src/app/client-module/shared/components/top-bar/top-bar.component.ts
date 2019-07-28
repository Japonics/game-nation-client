import {Component, OnInit} from '@angular/core';
import {AuthManagerService} from '../../../../core-module/services/auth-manager.service';
import {IUser} from '../../../auth/interfaces/user.interface';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})

export class TopBarComponent implements OnInit {

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
  }

  public ngOnInit(): void {
  }
}
