import {Component, OnDestroy, ViewChild} from '@angular/core';
import {takeWhile} from 'rxjs/operators';

import {OrdersChartComponent} from './charts/orders-chart/orders-chart.component';
import {ProfitChartComponent} from './charts/profit-chart/profit-chart.component';
import {OrdersChart} from '../../../../../@core/data/orders-chart';
import {ProfitChart} from '../../../../../@core/data/profit-chart';
import {OrderProfitChartSummary, OrdersProfitChartData} from '../../../../../@core/data/orders-profit-chart';

@Component({
  selector: 'app-charts-panel',
  styleUrls: ['./charts-panel.component.scss'],
  templateUrl: './charts-panel.component.html',
})
export class ECommerceChartsPanelComponent implements OnDestroy {

  @ViewChild('ordersChart', {static: true}) ordersChart: OrdersChartComponent;
  @ViewChild('profitChart', {static: true}) profitChart: ProfitChartComponent;

  public chartPanelSummary: OrderProfitChartSummary[];
  public period: string = 'week';
  public ordersChartData: OrdersChart;
  public profitChartData: ProfitChart;

  private _alive = true;

  constructor(private ordersProfitChartService: OrdersProfitChartData) {
    this.ordersProfitChartService.getOrderProfitChartSummary()
      .pipe(takeWhile(() => this._alive))
      .subscribe((summary) => {
        this.chartPanelSummary = summary;
      });

    this.getOrdersChartData(this.period);
    this.getProfitChartData(this.period);
  }

  public ngOnDestroy(): void {
    this._alive = false;
  }

  public setPeriodAndGetChartData(value: string): void {
    if (this.period !== value) {
      this.period = value;
    }

    this.getOrdersChartData(value);
    this.getProfitChartData(value);
  }

  public changeTab(selectedTab): void {
    if (selectedTab.tabTitle === 'Profit') {
      this.profitChart.resizeChart();
    } else {
      this.ordersChart.resizeChart();
    }
  }

  public getOrdersChartData(period: string): void {
    this.ordersProfitChartService.getOrdersChartData(period)
      .pipe(takeWhile(() => this._alive))
      .subscribe(ordersChartData => {
        this.ordersChartData = ordersChartData;
      });
  }

  public getProfitChartData(period: string): void {
    this.ordersProfitChartService.getProfitChartData(period)
      .pipe(takeWhile(() => this._alive))
      .subscribe(profitChartData => {
        this.profitChartData = profitChartData;
      });
  }
}
