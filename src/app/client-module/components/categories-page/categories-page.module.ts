import {NgModule} from '@angular/core';
import {ThemeModule} from '../../../@theme/theme.module';
import {CategoriesPageOutletComponent} from './categories-page-outlet/categories-page-outlet.component';


@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    CategoriesPageOutletComponent,
  ],
})
export class CategoriesPageModule {
}
