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
  NbAccordionModule,
  NbActionsModule,
  NbAlertModule,
  NbButtonModule,
  NbContextMenuModule,
  NbIconModule,
  NbInputModule, NbLayoutModule,
  NbListModule,
  NbOverlayService,
  NbPopoverModule, NbRouteTabsetModule,
  NbSearchModule, NbTabsetModule, NbTreeGridModule,
  NbUserModule
} from '@nebular/theme';
import {NbAuthModule} from '@nebular/auth';
import {ThemeModule} from '../@theme/theme.module';
import {TopGamesSliderComponent} from './components/landing-page/top-games-slider/top-games-slider.component';
import {TopRatedGamesSliderComponent} from './components/landing-page/top-rated-games-slider/top-rated-games-slider.component';
import {TopSoldGamesSliderComponent} from './components/landing-page/top-sold-games-slider/top-sold-games-slider.component';
import {CategoriesSliderComponent} from './components/landing-page/categories-slider/categories-slider.component';
import {CarouselModule} from 'ngx-carousel-lib';
import {SlideshowModule} from 'ng-simple-slideshow';

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
  ThemeModule,
  NbSearchModule,
  NbLayoutModule,
  CarouselModule,
  NbTreeGridModule
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
  ProfilePageOutletComponent,
  TopGamesSliderComponent,
  TopRatedGamesSliderComponent,
  TopSoldGamesSliderComponent,
  CategoriesSliderComponent
];

@NgModule({
  imports: [...MODULES, SlideshowModule, NbAccordionModule, NbTabsetModule, NbRouteTabsetModule],
  providers: [...SERVICES],
  declarations: [...COMPONENTS]
})
export class ClientModule {
}
