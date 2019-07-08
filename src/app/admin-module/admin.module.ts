import {NgModule} from '@angular/core';
import {AdminOutletComponent} from './components/admin-outlet/admin-outlet.component';
import {TranslateModule} from '@ngx-translate/core';
import {AdminTopBarComponent} from './components/admin-top-bar/admin-top-bar.component';
import {RouterModule} from '@angular/router';
import {MatSidenavModule} from '@angular/material';

@NgModule({
  imports: [
    TranslateModule,
    RouterModule,
    MatSidenavModule
  ],
  providers: [],
  declarations: [
    AdminOutletComponent,
    AdminTopBarComponent
  ],
  exports: []
})
export class AdminModule {
}
