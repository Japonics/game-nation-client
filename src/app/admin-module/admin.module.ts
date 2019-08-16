import {NgModule} from '@angular/core';
import {NbMenuModule} from '@nebular/theme';
import {ThemeModule} from '../@theme/theme.module';
import {DashboardModule} from './components/dashboard/dashboard.module';
import {RouterModule} from '@angular/router';
import {AdminOutletComponent} from './components/admin-outlet/admin-outlet.component';

@NgModule({
  imports: [
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    RouterModule
  ],
  declarations: [
    AdminOutletComponent,
  ],
})
export class AdminModule {
}
