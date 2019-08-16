import {NgModule} from '@angular/core';
import {TopBarComponent} from './components/top-bar/top-bar.component';
import {AuthOutletComponent} from '../@auth/components/auth-outlet/auth-outlet.component';
import {TranslateModule} from '@ngx-translate/core';
import {ClientOutletComponent} from './components/client-outlet/client-outlet.component';
import {LoginFormComponent} from '../@auth/components/login-form/login-form.component';
import {RegisterFormComponent} from '../@auth/components/register-form/register-form.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {AuthService} from '../@auth/services/auth.service';
import {CategoriesPageOutletComponent} from './components/categories-page/categories-page-outlet/categories-page-outlet.component';
import {GamesPageOutletComponent} from './components/games-page/games-page-outlet/games-page-outlet.component';
import {LandingPageOutletComponent} from './components/landing-page/landing-page-outlet/landing-page-outlet.component';
import {ProfilePageOutletComponent} from './components/profile-page/profile-page-outlet/profile-page-outlet.component';
import {
  NbActionsModule,
  NbAlertModule,
  NbButtonModule, NbContextMenuModule,
  NbIconModule,
  NbInputModule,
  NbListModule, NbOverlayService,
  NbPopoverModule, NbUserModule
} from '@nebular/theme';
import {NbAuthModule} from '@nebular/auth';
import {ThemeModule} from '../@theme/theme.module';

const MODULES = [
  CommonModule,
  TranslateModule,
  FormsModule,
  RouterModule,
  ReactiveFormsModule,
  NbIconModule,
  NbPopoverModule,
  NbButtonModule,
  NbInputModule,
  NbListModule,
  NbAlertModule,
  NbActionsModule,
  NbUserModule,
  NbContextMenuModule,
  NbAuthModule,
  ThemeModule
];

const SERVICES = [
  AuthService,
  NbOverlayService,
];

const COMPONENTS = [
  ClientOutletComponent,
  TopBarComponent,
  AuthOutletComponent,
  LoginFormComponent,
  RegisterFormComponent,
  CategoriesPageOutletComponent,
  GamesPageOutletComponent,
  LandingPageOutletComponent,
  ProfilePageOutletComponent
];

@NgModule({
  imports: [...MODULES],
  providers: [...SERVICES],
  declarations: [...COMPONENTS]
})
export class ClientModule {
}
