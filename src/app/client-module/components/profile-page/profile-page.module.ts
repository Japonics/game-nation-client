import {NgModule} from '@angular/core';
import {ThemeModule} from '../../../@theme/theme.module';
import {FormsModule} from '@angular/forms';
import {ProfilePageOutletComponent} from './profile-page-outlet/profile-page-outlet.component';
import {ProfileDetailsComponent} from './profile-details/profile-details.component';
import {
  NbCardModule, NbInputModule,
  NbLayoutModule,
  NbRouteTabsetModule,
  NbSidebarModule,
  NbTabsetModule,
  NbTreeGridModule
} from '@nebular/theme';
import {TranslateModule} from '@ngx-translate/core';
import {OrdersListComponent} from './orders-list/orders-list.component';
import {ProfileInformationComponent} from './profile-information/profile-information.component';

@NgModule({
  imports: [
    ThemeModule,
    FormsModule,
    NbSidebarModule,
    NbLayoutModule,
    NbCardModule,
    NbRouteTabsetModule,
    NbTabsetModule,
    TranslateModule,
    NbTreeGridModule,
    NbInputModule,
  ],
  declarations: [
    ProfilePageOutletComponent,
    ProfileDetailsComponent,
    OrdersListComponent,
    ProfileInformationComponent,
  ],
})
export class ProfilePageModule {
}
