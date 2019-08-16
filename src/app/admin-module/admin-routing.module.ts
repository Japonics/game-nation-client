import {Routes} from '@angular/router';
import {DashboardComponent} from './components/dashboard/components/dashboard/dashboard.component';
// import {NotFoundComponent} from './miscellaneous/not-found/not-found.component';

export const ADMIN_ROUTING_MODULE: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  // {
  //   path: '**',
  //   component: NotFoundComponent,
  // }
];
