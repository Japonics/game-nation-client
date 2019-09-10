import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {ClientModule} from './client-module/client.module';
import {AdminModule} from './admin-module/admin.module';
import {AppOutletComponent} from './@theme/components/app-outlet/app-outlet.component';
import {HttpClientService} from './@core/services/http-client.service';
import {NotificationService} from './@core/services/notification.service';
import {ThemeModule} from './@theme/theme.module';
import {CoreModule} from './@core/core.module';
import {
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbOverlayService,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule
} from '@nebular/theme';
import {AnalyticsService} from './@core/utils/analytics.service';
import {LayoutService} from './@core/utils/layout.service';
import {AuthModule} from './@auth/auth.module';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/languages/', '.json');
}

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    HttpClientModule,
    CoreModule.forRoot(),
    ThemeModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    AuthModule,
    AdminModule,
    ClientModule,
  ],
  providers: [
    HttpClient,
    HttpClientService,
    NotificationService,
    AnalyticsService,
    NbOverlayService,
    LayoutService,
  ],
  declarations: [
    AppComponent,
    AppOutletComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
