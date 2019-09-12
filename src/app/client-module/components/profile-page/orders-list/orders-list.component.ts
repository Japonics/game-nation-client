import {Component, OnInit} from '@angular/core';
import {NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder} from '@nebular/theme';
import {Order} from '../../../../shared/models/order';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss'],
})
export class OrdersListComponent implements OnInit {

  public customColumn: string = 'name';
  public defaultColumns: string[] = ['size', 'kind', 'items'];
  public allColumns: string[] = [this.customColumn, ...this.defaultColumns];
  public dataSource: NbTreeGridDataSource<Order>;
  public sortColumn: string;
  public sortDirection: NbSortDirection = NbSortDirection.NONE;

  constructor(
    private _dataSourceBuilder: NbTreeGridDataSourceBuilder<Order>,
    private _translateService: TranslateService,
  ) {
    this.dataSource = this._dataSourceBuilder.create(this.getDate());

    this._translateService.get('USER.YOUR_ORDERS')
      .subscribe(() => {

      });
  }

  public ngOnInit(): void {
  }

  public updateSort(sortRequest: NbSortRequest): void {
    this.sortColumn = sortRequest.column;
    this.sortDirection = sortRequest.direction;
  }

  public getSortDirection(column: string): NbSortDirection {
    if (this.sortColumn === column) {
      return this.sortDirection;
    }
    return NbSortDirection.NONE;
  }

  private getDate = (): Order[] => [
    {id: '1', name: 'Name', date: '2000', coverImage: '', downloadUrl: ''},
    {id: '1', name: 'Name', date: '2000', coverImage: '', downloadUrl: ''},
    {id: '1', name: 'Name', date: '2000', coverImage: '', downloadUrl: ''},
    {id: '1', name: 'Name', date: '2000', coverImage: '', downloadUrl: ''},
    {id: '1', name: 'Name', date: '2000', coverImage: '', downloadUrl: ''},
    {id: '1', name: 'Name', date: '2000', coverImage: '', downloadUrl: ''},
    {id: '1', name: 'Name', date: '2000', coverImage: '', downloadUrl: ''},
    {id: '1', name: 'Name', date: '2000', coverImage: '', downloadUrl: ''},
    {id: '1', name: 'Name', date: '2000', coverImage: '', downloadUrl: ''},
    {id: '1', name: 'Name', date: '2000', coverImage: '', downloadUrl: ''},
  ]
}
