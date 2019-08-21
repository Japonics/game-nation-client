import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GamesManagementOutletComponent} from './components/games-management-outlet/games-management-outlet.component';
import {RouterModule} from '@angular/router';
import {GamesManageListComponent} from './components/games-manage-list/games-manage-list.component';
import {ThemeModule} from '../../../@theme/theme.module';
import {NbButtonModule, NbCardModule, NbDialogModule, NbInputModule, NbTreeGridModule} from '@nebular/theme';
import {TranslateModule} from '@ngx-translate/core';
import {GameFormComponent} from './components/game-form/game-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    RouterModule,
    NbTreeGridModule,
    NbCardModule,
    TranslateModule,
    NbInputModule,
    NbButtonModule,
    NbDialogModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  declarations: [
    GamesManagementOutletComponent,
    GamesManageListComponent,
    GameFormComponent
  ],
  entryComponents: [
    GameFormComponent
  ]
})
export class GamesModule {
}
