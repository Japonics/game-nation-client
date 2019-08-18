import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrdersManagementOutletComponent} from './components/orders-management-outlet/orders-management-outlet.component';

const MODULES = [
  CommonModule
];

const COMPONENTS = [
  OrdersManagementOutletComponent
];

const PROVIDERS = [];

@NgModule({
  imports: [...MODULES],
  declarations: [...COMPONENTS],
  providers: [...PROVIDERS],
})
export class OrdersModule {
}
