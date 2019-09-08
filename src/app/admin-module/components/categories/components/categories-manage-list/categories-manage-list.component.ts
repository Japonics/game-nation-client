import {Component, OnInit} from '@angular/core';
import {NbDialogService, NbTreeGridDataSource} from '@nebular/theme';
import {Game} from '../../../../../shared/models/game';
import {CategoryFormComponent} from '../category-form/category-form.component';
import {Category} from '../../../../../shared/models/category';

@Component({
  selector: 'app-games-manage-list',
  templateUrl: './categories-manage-list.component.html',
  styleUrls: ['./categories-manage-list.component.scss']
})
export class CategoriesManageListComponent implements OnInit {

  public customColumn: string = 'name';
  public defaultColumns: string[] = ['size', 'kind', 'items'];
  public allColumns: string[] = [this.customColumn, ...this.defaultColumns];
  public categoriesSource: NbTreeGridDataSource<Category>;

  private _categories: Category[] = [];

  constructor(private _nbDialogService: NbDialogService) {
  }

  public ngOnInit(): void {
  }

  public getColumnName(column: string): string {
    return `COLUMNS.${column.toUpperCase()}`;
  }

  public addGame(): void {
    this._nbDialogService.open(CategoryFormComponent, {
      context: {
        category: {
          id: null,
          name: null,
          cover_image: null,
        }
      },
    }).onClose
      .subscribe((editedCategory: Category) => {
        if (editedCategory) {
          this._handleEditDone(editedCategory);
        }
      });
  }

  public editGame(game: any): void {
    return;
  }

  private _handleEditDone(category: Category): void {
    const found: Category = this._categories.find(item => item.id === category.id);

    if (!category) {
      this._categories.push(category);
      return;
    }

    Object.keys(category).map(property => {
      found[property] = category[property];
    });
  }
}
