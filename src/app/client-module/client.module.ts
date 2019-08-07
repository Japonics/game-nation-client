import {NgModule} from '@angular/core';
import {TopBarComponent} from './core/components/top-bar/top-bar.component';
import {AuthOutletComponent} from './auth/components/auth-outlet/auth-outlet.component';
import {TranslateModule} from '@ngx-translate/core';
import {
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatListModule, MatMenuModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import {ClientOutletComponent} from './core/components/client-outlet/client-outlet.component';
import {LoginFormComponent} from './auth/components/login-form/login-form.component';
import {RegisterFormComponent} from './auth/components/register-form/register-form.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {AuthService} from './auth/services/auth.service';
import {CategoriesPageOutletComponent} from './pages/categories-page/categories-page-outlet/categories-page-outlet.component';
import {GamesPageOutletComponent} from './pages/games-page/games-page-outlet/games-page-outlet.component';
import {LandingPageOutletComponent} from './pages/landing-page/landing-page-outlet/landing-page-outlet.component';
import {ProfilePageOutletComponent} from './pages/profile-page/profile-page-outlet/profile-page-outlet.component';
import {UIModule} from '../ui-module/ui.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatInputModule,
    FormsModule,
    RouterModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatButtonModule,
    UIModule,
    MatMenuModule
  ],
  providers: [
    AuthService
  ],
  declarations: [
    ClientOutletComponent,
    TopBarComponent,
    AuthOutletComponent,
    LoginFormComponent,
    RegisterFormComponent,
    CategoriesPageOutletComponent,
    GamesPageOutletComponent,
    LandingPageOutletComponent,
    ProfilePageOutletComponent
  ],
  exports: [],
})
export class ClientModule {
}
