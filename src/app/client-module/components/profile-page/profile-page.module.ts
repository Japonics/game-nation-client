import {NgModule} from '@angular/core';
import {ThemeModule} from '../../../@theme/theme.module';
import {FormsModule} from '@angular/forms';
import {ProfilePageOutletComponent} from './profile-page-outlet/profile-page-outlet.component';
import {ProfileDetailsComponent} from './profile-details/profile-details.component';

@NgModule({
  imports: [
    ThemeModule,
    FormsModule,
  ],
  declarations: [
    ProfilePageOutletComponent,
    ProfileDetailsComponent,
  ],
})
export class ProfilePageModule {
}
