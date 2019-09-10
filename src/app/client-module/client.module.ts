import {NgModule} from '@angular/core';
import {TopBarComponent} from './components/top-bar/top-bar.component';
import {TranslateModule} from '@ngx-translate/core';
import {ClientOutletComponent} from './components/client-outlet/client-outlet.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
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
import {CarouselModule} from 'ngx-carousel-lib';
import {SlideshowModule} from 'ng-simple-slideshow';
import {CategoriesPageModule} from './components/categories-page/categories-page.module';
import {ProfilePageModule} from './components/profile-page/profile-page.module';
import {GamesPageModule} from './components/games-page/games-page.module';
import {LandingPageModule} from './components/landing-page/landing-page.module';

@NgModule({
  imports: [
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
    NbTreeGridModule,
    SlideshowModule,
    NbAccordionModule,
    NbTabsetModule,
    NbRouteTabsetModule,
    LandingPageModule,
    CategoriesPageModule,
    ProfilePageModule,
    GamesPageModule,
  ],
  providers: [
    NbOverlayService,
  ],
  declarations: [
    ClientOutletComponent,
    TopBarComponent,
  ]
})
export class ClientModule {
}
