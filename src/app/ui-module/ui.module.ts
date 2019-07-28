import {NgModule} from '@angular/core';
import {MatchValueDirective} from './directives/match-value.directive';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [],
  exports: [
    MatchValueDirective
  ],
  declarations: [
    MatchValueDirective
  ]
})
export class UIModule {
}
