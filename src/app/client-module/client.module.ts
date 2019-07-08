import {NgModule} from '@angular/core';
import {FooterComponent} from './shared/components/footer/footer.component';
import {TopBarComponent} from './shared/components/top-bar/top-bar.component';
import {GuestOutletComponent} from './auth/components/guest-outlet/guest-outlet.component';
import {TranslateModule} from '@ngx-translate/core';
import {MatIconModule, MatListModule, MatTabsModule, MatToolbarModule} from '@angular/material';
import {ClientOutletComponent} from './core/client-outlet/client-outlet.component';
import {LoginFormComponent} from './auth/components/login-form/login-form.component';
import {RegisterFormComponent} from './auth/components/register-form/register-form.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    TranslateModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    RouterModule,
    MatToolbarModule
  ],
  providers: [],
  declarations: [
    ClientOutletComponent,
    FooterComponent,
    TopBarComponent,
    GuestOutletComponent,
    LoginFormComponent,
    RegisterFormComponent
  ],
  exports: [],
})
export class ClientModule {
}
