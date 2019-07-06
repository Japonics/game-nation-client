import {NgModule} from '@angular/core';
import {AdminOutletComponent} from './components/admin-outlet/admin-outlet.component';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    TranslateModule
  ],
  providers: [],
  declarations: [AdminOutletComponent],
  exports: []
})
export class AdminModule {
}
