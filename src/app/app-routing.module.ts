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
        path: 'admin',
        component: AdminOutletComponent,
        children: ADMIN_ROUTING_MODULE,
        canActivate: [IsAuthenticatedGuard]
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
