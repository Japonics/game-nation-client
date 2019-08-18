import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GamesManagementOutletComponent} from './components/games-management-outlet/games-management-outlet.component';

const MODULES = [
  CommonModule
];

const COMPONENTS = [
  GamesManagementOutletComponent
];

const PROVIDERS = [];

@NgModule({
  imports: [...MODULES],
  declarations: [...COMPONENTS],
  providers: [...PROVIDERS],
})
export class GamesModule {
}
