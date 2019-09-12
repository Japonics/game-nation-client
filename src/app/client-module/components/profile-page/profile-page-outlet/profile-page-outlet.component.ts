import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-profile-page-outlet',
  templateUrl: './profile-page-outlet.component.html',
  styleUrls: ['./profile-page-outlet.component.scss']
})
export class ProfilePageOutletComponent {

  public tabs: any[];

  constructor(
    private _translateService: TranslateService,
  ) {
    this._translateService.get('USER.YOUR_ORDERS')
      .subscribe(() => {
        this.tabs = [
          {
            title: this._translateService.instant('USER.YOUR_ACCOUNT'),
            route: '/profile',
            icon: 'person-outline',
            responsive: true,
          },
          {
            title: this._translateService.instant('USER.YOUR_ORDERS'),
            route: '/orders',
            icon: 'shopping-cart',
            responsive: true,
          }
        ];
      });
  }
}
