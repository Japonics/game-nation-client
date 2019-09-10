import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {AuthService} from './services/auth.service';
import {AuthOutletComponent} from './components/auth-outlet/auth-outlet.component';
import {LoginFormComponent} from './components/login-form/login-form.component';
import {RegisterFormComponent} from './components/register-form/register-form.component';
import {ThemeModule} from '../@theme/theme.module';
import {
  NbAlertModule,
  NbButtonModule,
  NbInputModule,
  NbRouteTabsetModule
} from '@nebular/theme';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    ThemeModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NbRouteTabsetModule,
    TranslateModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
  ],
  declarations: [
    AuthOutletComponent,
    LoginFormComponent,
    RegisterFormComponent,
  ],
  providers: [
    AuthService,
  ],
})
export class AuthModule {
}
