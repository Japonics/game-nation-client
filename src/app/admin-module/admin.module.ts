import {NgModule} from '@angular/core';
import {NbMenuModule} from '@nebular/theme';
import {ThemeModule} from '../@theme/theme.module';
import {DashboardModule} from './components/dashboard/dashboard.module';
import {RouterModule} from '@angular/router';
import {AdminOutletComponent} from './components/admin-outlet/admin-outlet.component';
import {CategoriesModule} from './components/categories/categories.module';
import {GamesModule} from './components/games/games.module';
import {UsersModule} from './components/users/users.module';
import {OrdersModule} from './components/orders/orders.module';

const MODULES = [
  ThemeModule,
  NbMenuModule,
  DashboardModule,
  RouterModule,
  CategoriesModule,
  GamesModule,
  UsersModule,
  OrdersModule
];

const COMPONENTS = [
  AdminOutletComponent,
];

@NgModule({
  imports: [...MODULES],
  declarations: [...COMPONENTS],
})
export class AdminModule {
}
