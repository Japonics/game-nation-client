import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-guest-outlet',
  templateUrl: './auth-outlet.component.html',
  styleUrls: ['./auth-outlet.component.scss']
})
export class AuthOutletComponent {

  public tabs: any[] = [];

  constructor(private _translateService: TranslateService) {
    this._translateService.get('AUTH.LOGIN').subscribe(() => {
      this.tabs = [
        {
          title: this._translateService.instant('AUTH.LOGIN'),
          route: '/login',
        },
        {
          title: this._translateService.instant('AUTH.REGISTER'),
          route: '/register',
        }
      ];
    });
  }
}
