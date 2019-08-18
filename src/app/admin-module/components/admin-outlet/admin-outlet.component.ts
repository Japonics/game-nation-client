import {Component} from '@angular/core';
import {MENU_ITEMS} from '../../admin-menu';
import {TranslateService} from '@ngx-translate/core';
import {NbMenuItem} from '@nebular/theme';

@Component({
  selector: 'app-admin-outlet',
  templateUrl: 'admin-outlet.component.html',
  styleUrls: ['admin-outlet.component.scss']
})
export class AdminOutletComponent {

  public menu: NbMenuItem[] = [];

  constructor(private _translateService: TranslateService) {
    this._translateService.get('NAV').subscribe(() => {
      this.menu = MENU_ITEMS;
      for (const item of this.menu) {
        item.title = this._translateService.instant(item.title);
        if (item.children) {
          for (const itemChild of item.children) {
            itemChild.title = this._translateService.instant(itemChild.title);
          }
        }
      }
    });
  }
}
