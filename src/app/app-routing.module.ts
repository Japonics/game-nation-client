import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppOutletComponent} from './core-module/components/app-outlet/app-outlet.component';
import {ClientOutletComponent} from './client-module/core/components/client-outlet/client-outlet.component';
import {IsAuthorizedGuard} from './core-module/guards/is-authorized.guard';
import {IsAdminGuard} from './core-module/guards/is-admin.guard';
import {AuthOutletComponent} from './client-module/auth/components/auth-outlet/auth-outlet.component';
import {LoginFormComponent} from './client-module/auth/components/login-form/login-form.component';
import {RegisterFormComponent} from './client-module/auth/components/register-form/register-form.component';
import {LandingPageOutletComponent} from './client-module/pages/landing-page/landing-page-outlet/landing-page-outlet.component';
import {
  DashboardPageOutletComponent
} from './admin-module/pages/dashboard-page/components/dashboard-page-outlet/dashboard-page-outlet.component';
import {OrdersPageOutletComponent} from './admin-module/pages/orders-page/components/orders-page-outlet/orders-page-outlet.component';
import {
  GamesPageOutletComponent as AdminGamesPageOutletComponent
} from './admin-module/pages/games-page/components/games-page-outlet/games-page-outlet.component';
import {AdminOutletComponent} from './admin-module/core/components/admin-outlet/admin-outlet.component';
import {
  CategoriesPageOutletComponent as AdminCategoriesPageOutletComponent
} from './admin-module/pages/categories-page/components/categories-page-outlet/categories-page-outlet.component';
import {UsersPageOutletComponent} from './admin-module/pages/users-page/components/users-page-outlet/users-page-outlet.component';

const routes: Routes = [
  {
    path: '',
    component: AppOutletComponent,
    children: [
      {
        path: '', component: ClientOutletComponent, children: [
          {path: '', component: LandingPageOutletComponent},
          {
            path: '', component: AuthOutletComponent, children: [
              {path: 'login', component: LoginFormComponent},
              {path: 'register', component: RegisterFormComponent}
            ]
          }
        ]
      },
      {
        path: 'admin', component: AdminOutletComponent, canActivate: [IsAuthorizedGuard, IsAdminGuard], children: [
          {path: 'dashboard', component: DashboardPageOutletComponent},
          {path: 'categories', component: AdminCategoriesPageOutletComponent},
          {path: 'games', component: AdminGamesPageOutletComponent},
          {path: 'orders', component: OrdersPageOutletComponent},
          {path: 'users', component: UsersPageOutletComponent}
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
