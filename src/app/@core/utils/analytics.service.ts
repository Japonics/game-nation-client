import {Injectable} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {Location} from '@angular/common';
import {filter} from 'rxjs/operators';

declare const ga: any;

@Injectable()
export class AnalyticsService {

  private readonly _enabled: boolean;

  constructor(private location: Location, private router: Router) {
    this._enabled = false;
  }

  public trackPageViews(): void {
    if (this._enabled) {
      this.router.events.pipe(
        filter((event) => event instanceof NavigationEnd),
      )
        .subscribe(() => {
          ga('send', {hitType: 'pageview', page: this.location.path()});
        });
    }
  }

  public trackEvent(eventName: string): void {
    if (this._enabled) {
      ga('send', 'event', eventName);
    }
  }
}
