import {NgModule} from '@angular/core';
import {CategoriesManagementOutletComponent} from './components/categories-management-outlet/categories-management-outlet.component';
import {CommonModule} from '@angular/common';

const MODULES = [
  CommonModule
];

const COMPONENTS = [
  CategoriesManagementOutletComponent
];

const PROVIDERS = [];

@NgModule({
  imports: [...MODULES],
  declarations: [...COMPONENTS],
  providers: [...PROVIDERS],
})
export class CategoriesModule {
}
