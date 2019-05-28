import {NgModule} from '@angular/core';
import {FooterComponent} from './shared/components/footer/footer.component';
import {TopBarComponent} from './shared/components/top-bar/top-bar.component';
import {GuestOutletComponent} from './auth/components/guest-outlet/guest-outlet.component';

@NgModule({
  imports: [],
  providers: [],
  declarations: [
    FooterComponent,
    TopBarComponent,
    GuestOutletComponent
  ],
  exports: [],
})
export class ClientModule {
}
