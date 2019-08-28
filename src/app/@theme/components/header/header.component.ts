import {Component, OnDestroy, OnInit} from '@angular/core';
import {NbMediaBreakpointsService, NbMenuItem, NbMenuService, NbSidebarService, NbThemeService} from '@nebular/theme';
import {LayoutService} from '../../../@core/utils/layout.service';
import {map, takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {IUser} from '../../../@auth/interfaces/user.interface';
import {NbAuthService} from '@nebular/auth';
import {TranslateService} from '@ngx-translate/core';
import {UserService} from '../../../@core/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnDestroy {

  public user: IUser;
  public userPictureOnly: boolean = false;
  public userMenu: NbMenuItem[] = [];

  private _destroy$: Subject<void> = new Subject<void>();

  constructor(private _sidebarService: NbSidebarService,
              private _menuService: NbMenuService,
              private _themeService: NbThemeService,
              private _nbAuthService: NbAuthService,
              private _layoutService: LayoutService,
              private _breakpointService: NbMediaBreakpointsService,
              private _userService: UserService,
              private _translationService: TranslateService) {
    this._userService
      .getUser()
      .subscribe(user => {
        if (user) {
          this.user = user;
        }
      });

    this._translationService.get('USER.PROFILE')
      .subscribe(() => {
        this.userMenu = [
          {
            title: this._translationService.instant('USER.PROFILE'),
            link: '/profile',
          },
          {
            title: this._translationService.instant('AUTH.LOG_OUT'),
            link: '/logout'
          }
        ];
      });

    const {xl} = this._breakpointService.getBreakpointsMap();
    this._themeService.onMediaQueryChange()
      .pipe(
        map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
        takeUntil(this._destroy$),
      )
      .subscribe((isLessThanXl: boolean) => this.userPictureOnly = isLessThanXl);
  }

  public ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  public toggleSidebar(): boolean {
    this._sidebarService.toggle(true, 'menu-sidebar');
    this._layoutService.changeLayoutSize();

    return false;
  }

  get avatar(): string {
    return this.user && this.user.avatar ? this.user.avatar : '/assets/images/default_avatar.png';
  }
}
