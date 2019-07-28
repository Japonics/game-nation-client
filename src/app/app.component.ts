import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {INotification} from './core-module/interfaces/notification.interface';
import {NotificationService} from './core-module/services/notification.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor(private _translate: TranslateService,
              private _snackBar: MatSnackBar,
              private _notificationService: NotificationService) {
    this._translate.setDefaultLang('pl');
    this._translate.use('pl');

    this._notificationService.getSubscriber.subscribe((notification: INotification) => {
      this.openSnackBar(notification);
    });
  }

  public openSnackBar(notification: INotification): void {
    this._snackBar.open(notification.message, notification.closeLabel, {
      duration: 50000,
      panelClass: notification.type
    });
  }
}
