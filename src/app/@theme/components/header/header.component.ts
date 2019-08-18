import {Component, OnDestroy, OnInit} from '@angular/core';
import {NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService} from '@nebular/theme';
import {LayoutService} from '../../../@core/utils/layout.service';
import {map, takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {IUser} from '../../../@auth/interfaces/user.interface';
import {NbAuthService} from '@nebular/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {

  private _destroy$: Subject<void> = new Subject<void>();
  user: IUser;
  userPictureOnly: boolean = false;
  userMenu = [{title: 'Profile'}, {title: 'Log out'}];

  constructor(private _sidebarService: NbSidebarService,
              private _menuService: NbMenuService,
              private _themeService: NbThemeService,
              private _nbAuthService: NbAuthService,
              private _layoutService: LayoutService,
              private _breakpointService: NbMediaBreakpointsService) {
  }

  public ngOnInit(): void {
    this._nbAuthService
      .getToken()
      .subscribe(token => {
        if (token.isValid()) {
          this.user = token.getPayload();
        }
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

  public navigateHome(): void {
    this._menuService.navigateHome();
  }
}
