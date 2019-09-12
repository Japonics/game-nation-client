import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppOutletComponent} from './@theme/components/app-outlet/app-outlet.component';
import {ClientOutletComponent} from './client-module/components/client-outlet/client-outlet.component';
import {AuthOutletComponent} from './@auth/components/auth-outlet/auth-outlet.component';
import {LoginFormComponent} from './@auth/components/login-form/login-form.component';
import {RegisterFormComponent} from './@auth/components/register-form/register-form.component';
import {LandingPageOutletComponent} from './client-module/components/landing-page/landing-page-outlet/landing-page-outlet.component';
import {ADMIN_ROUTING_MODULE} from './admin-module/admin-routing.module';
import {AdminOutletComponent} from './admin-module/components/admin-outlet/admin-outlet.component';
import {IsAuthenticatedGuard} from './@core/guards/is-authenticated.guard';
import {IsAdminGuard} from './@core/guards/is-admin.guard';
import {NbLogoutComponent} from '@nebular/auth';
import {ProfilePageOutletComponent} from './client-module/components/profile-page/profile-page-outlet/profile-page-outlet.component';
import {ProfileDetailsComponent} from './client-module/components/profile-page/profile-details/profile-details.component';
import {OrdersListComponent} from './client-module/components/profile-page/orders-list/orders-list.component';

const routes: Routes = [
  {
    path: '',
    component: AppOutletComponent,
    children: [
      {
        path: '',
        component: ClientOutletComponent,
        children: [
          {
            path: '',
            component: LandingPageOutletComponent
          },
          {
            path: '', component: AuthOutletComponent, children: [
              {
                path: 'login',
                component: LoginFormComponent,
              },
              {
                path: 'register',
                component: RegisterFormComponent,
              },
              {
                path: 'logout',
                component: NbLogoutComponent,
              },
            ]
          },
          {
            path: '',
            component: ProfilePageOutletComponent,
            children: [
              {
                path: 'profile',
                component: ProfileDetailsComponent,
              },
              {
                path: 'orders',
                component: OrdersListComponent,
              }
            ]
          }
        ]
      },
      {
        path: 'admin',
        component: AdminOutletComponent,
        children: ADMIN_ROUTING_MODULE,
        canActivate: [IsAuthenticatedGuard, IsAdminGuard]
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
