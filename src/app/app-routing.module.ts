import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppOutletComponent} from './core-module/components/app-outlet/app-outlet.component';
import {AdminOutletComponent} from './admin-module/components/admin-outlet/admin-outlet.component';
import {ClientOutletComponent} from './client-module/core/client-outlet/client-outlet.component';
import {IsAuthorizedGuard} from './core-module/guards/is-authorized.guard';
import {IsAdminGuard} from './core-module/guards/is-admin.guard';

const routes: Routes = [
  {
    path: '',
    component: AppOutletComponent,
    children: [
      {path: '', component: ClientOutletComponent},
      {path: 'admin', component: AdminOutletComponent, canActivate: [IsAuthorizedGuard, IsAdminGuard]}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
