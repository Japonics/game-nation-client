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
import {AppOutletComponent} from './core-module/components/app-outlet/app-outlet.component';
import {HttpClientService} from './core-module/services/http-client.service';
import {AuthMangerService} from './core-module/services/auth-manger.service';

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
    ClientModule,
    AdminModule
  ],
  providers: [
    HttpClientService,
    AuthMangerService
  ],
  declarations: [
    AppComponent,
    AppOutletComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
