import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersManagementOutletComponent} from './components/users-management-outlet/users-management-outlet.component';

const MODULES = [
  CommonModule
];

const COMPONENTS = [
  UsersManagementOutletComponent
];

const PROVIDERS = [];

@NgModule({
  imports: [...MODULES],
  declarations: [...COMPONENTS],
  providers: [...PROVIDERS],
})
export class UsersModule {
}
