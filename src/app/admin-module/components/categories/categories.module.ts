import {NgModule} from '@angular/core';
import {CategoriesManagementOutletComponent} from './components/categories-management-outlet/categories-management-outlet.component';
import {CommonModule} from '@angular/common';
import {CategoriesManageListComponent} from './components/categories-manage-list/categories-manage-list.component';
import {CategoryFormComponent} from './components/category-form/category-form.component';
import {ThemeModule} from '../../../@theme/theme.module';
import {TranslateModule} from '@ngx-translate/core';
import {
  NbButtonModule,
  NbCardModule, NbDialogModule,
  NbInputModule,
  NbTreeGridModule
} from '@nebular/theme';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ThemeModule,
    TranslateModule,
    NbTreeGridModule,
    NbCardModule,
    NbInputModule,
    NbDialogModule,
    NbButtonModule,
    RouterModule,
  ],
  providers: [],
  declarations: [
    CategoriesManagementOutletComponent,
    CategoriesManageListComponent,
    CategoryFormComponent,
  ],
  entryComponents: [
    CategoryFormComponent,
  ]
})
export class CategoriesModule {
}
