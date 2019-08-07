import {NgModule} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';
import {RouterModule} from '@angular/router';
import {
  MatButtonModule,
  MatIconModule, MatInputModule,
  MatListModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import {CategoriesPageOutletComponent} from './pages/categories-page/components/categories-page-outlet/categories-page-outlet.component';
import {DashboardPageOutletComponent} from './pages/dashboard-page/components/dashboard-page-outlet/dashboard-page-outlet.component';
import {GamesPageOutletComponent} from './pages/games-page/components/games-page-outlet/games-page-outlet.component';
import {OrdersPageOutletComponent} from './pages/orders-page/components/orders-page-outlet/orders-page-outlet.component';
import {UsersPageOutletComponent} from './pages/users-page/components/users-page-outlet/users-page-outlet.component';
import {AdminTopBarComponent} from './core/components/admin-top-bar/admin-top-bar.component';
import {AdminOutletComponent} from './core/components/admin-outlet/admin-outlet.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    TranslateModule,
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    MatInputModule
  ],
  providers: [],
  declarations: [
    AdminOutletComponent,
    AdminTopBarComponent,
    CategoriesPageOutletComponent,
    DashboardPageOutletComponent,
    GamesPageOutletComponent,
    OrdersPageOutletComponent,
    UsersPageOutletComponent
  ],
  exports: []
})
export class AdminModule {
}
