import {Component, OnInit} from '@angular/core';
import {NbDialogService, NbTreeGridDataSource} from '@nebular/theme';
import {Game} from '../../../../../shared/models/game';
import {GameFormComponent} from '../game-form/game-form.component';

@Component({
  selector: 'app-games-manage-list',
  templateUrl: './games-manage-list.component.html',
  styleUrls: ['./games-manage-list.component.scss']
})
export class GamesManageListComponent implements OnInit {

  public customColumn: string = 'name';
  public defaultColumns: string[] = ['size', 'kind', 'items'];
  public allColumns: string[] = [this.customColumn, ...this.defaultColumns];
  public gamesSource: NbTreeGridDataSource<Game>;

  private _games: Game[] = [];

  constructor(private _nbDialogService: NbDialogService) {
  }

  public ngOnInit(): void {
  }

  public getColumnName(column: string): string {
    return `COLUMNS.${column.toUpperCase()}`;
  }

  public addGame(): void {
    this._nbDialogService.open(GameFormComponent, {
      context: {
        game: {
          id: null,
          kind: null,
          name: null,
          rate: null
        }
      },
    }).onClose
      .subscribe((editedGame: Game) => {
        if (editedGame) {
          this._handleEditDone(editedGame);
        }
      });
  }

  public editGame(game: any): void {
    return;
  }

  private _handleEditDone(game: Game): void {
    const found: Game = this._games.find(item => item.id === game.id);

    if (!game) {
      this._games.push(game);
      return;
    }

    Object.keys(game).map(property => {
      found[property] = game[property];
    });
  }
}
