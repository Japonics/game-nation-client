import {NgModule} from '@angular/core';
import {ThemeModule} from '../../../@theme/theme.module';
import {CategoriesSliderComponent} from './categories-slider/categories-slider.component';
import {LandingPageOutletComponent} from './landing-page-outlet/landing-page-outlet.component';
import {TopGamesSliderComponent} from './top-games-slider/top-games-slider.component';
import {TopRatedGamesSliderComponent} from './top-rated-games-slider/top-rated-games-slider.component';
import {TopSoldGamesSliderComponent} from './top-sold-games-slider/top-sold-games-slider.component';
import {TranslateModule} from '@ngx-translate/core';
import {CarouselModule} from 'ngx-carousel-lib';

@NgModule({
  imports: [
    ThemeModule,
    TranslateModule,
    CarouselModule,
  ],
  declarations: [
    CategoriesSliderComponent,
    LandingPageOutletComponent,
    TopGamesSliderComponent,
    TopRatedGamesSliderComponent,
    TopSoldGamesSliderComponent,
  ],
})
export class LandingPageModule {
}
