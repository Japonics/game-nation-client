import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppOutletComponent} from './core-module/components/app-outlet/app-outlet.component';
import {AdminOutletComponent} from './admin-module/components/admin-outlet/admin-outlet.component';
import {ClientOutletComponent} from './client-module/core/client-outlet/client-outlet.component';

const routes: Routes = [
  {
    path: '',
    component: AppOutletComponent,
    children: [
      {path: '', component: ClientOutletComponent},
      {path: 'admin', component: AdminOutletComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
