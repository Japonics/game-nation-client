import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {INotification} from './@core/interfaces/notification.interface';
import {NotificationService} from './@core/services/notification.service';
import {AnalyticsService} from './@core/utils/analytics.service';
import {NbToastrConfig, NbToastrService} from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(private _translate: TranslateService,
              private analytics: AnalyticsService,
              private _nbToastrService: NbToastrService,
              private _notificationService: NotificationService) {
    this._translate.setDefaultLang('pl');
    this._translate.use('pl');

    this._notificationService.getSubscriber.subscribe((notification: INotification) => {
      this.showNotification(notification);
    });
  }

  public ngOnInit(): void {
    this.analytics.trackPageViews();
  }

  public showNotification(notification: INotification): void {
    const config: Partial<NbToastrConfig> = {
      // @ts-ignore
      position: notification.position ? notification.position : 'bottom-right',
      // @ts-ignore
      status: notification.type ? notification.type : 'default',
    };

    this._nbToastrService.show(notification.message, notification.title, config);
  }
}
