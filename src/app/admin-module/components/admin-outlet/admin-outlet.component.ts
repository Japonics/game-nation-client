import {Component} from '@angular/core';
import {MENU_ITEMS} from '../../admin-menu';

@Component({
  selector: 'app-admin-outlet',
  templateUrl: 'admin-outlet.component.html',
  styleUrls: ['admin-outlet.component.scss']
})
export class AdminOutletComponent {
  public menu = MENU_ITEMS;
}
