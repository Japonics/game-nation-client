import {NgModule} from '@angular/core';
import {ThemeModule} from '../../../@theme/theme.module';
import {RouterModule} from '@angular/router';
import {GamesPageOutletComponent} from './games-page-outlet/games-page-outlet.component';


@NgModule({
  imports: [
    ThemeModule,
    RouterModule,
  ],
  declarations: [
    GamesPageOutletComponent,
  ],
})
export class GamesPageModule {
}
