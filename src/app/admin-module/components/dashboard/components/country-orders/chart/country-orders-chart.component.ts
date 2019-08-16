import {AfterViewInit, Component, Input, OnChanges, OnDestroy, SimpleChanges} from '@angular/core';
import {NbThemeService} from '@nebular/theme';
import {takeWhile} from 'rxjs/operators';
import {LayoutService} from '../../../../../../@core/utils/layout.service';

declare const echarts: any;

@Component({
  selector: 'app-country-orders-chart',
  templateUrl: './country-orders-chart.component.html',
  styleUrls: ['./country-orders-chart.component.scss'],
})
export class CountryOrdersChartComponent implements AfterViewInit, OnDestroy, OnChanges {

  @Input() countryName: string;
  @Input() data: number[];
  @Input() maxValue: number;
  @Input() labels: string[];

  public option: any = {};
  public echartsInstance;

  private _alive = true;

  constructor(private theme: NbThemeService,
              private layoutService: LayoutService) {
    this.layoutService.onChangeLayoutSize()
      .pipe(
        takeWhile(() => this._alive),
      )
      .subscribe(() => this.resizeChart());
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.data && !changes.data.isFirstChange()) {
      this.echartsInstance.setOption({
        series: [
          {
            data: this.data.map(v => this.maxValue),
          },
          {
            data: this.data,
          },
          {
            data: this.data,
          },
        ],
      });
    }
  }

  public ngAfterViewInit(): void {
    this.theme.getJsTheme()
      .pipe(takeWhile(() => this._alive))
      .subscribe(config => {
        const countriesTheme: any = config.variables.countryOrders;

        this.option = Object.assign({}, {
          grid: {
            left: '3%',
            right: '3%',
            bottom: '3%',
            top: '3%',
            containLabel: true,
          },
          xAxis: {
            axisLabel: {
              color: countriesTheme.chartAxisTextColor,
              fontSize: countriesTheme.chartAxisFontSize,
            },
            axisLine: {
              lineStyle: {
                color: countriesTheme.chartAxisLineColor,
                width: '2',
              },
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              lineStyle: {
                color: countriesTheme.chartAxisSplitLine,
                width: '1',
              },
            },
          },
          yAxis: {
            data: this.labels,
            axisLabel: {
              color: countriesTheme.chartAxisTextColor,
              fontSize: countriesTheme.chartAxisFontSize,
            },
            axisLine: {
              lineStyle: {
                color: countriesTheme.chartAxisLineColor,
                width: '2',
              },
            },
            axisTick: {
              show: false,
            },
          },
          series: [
            { // For shadow
              type: 'bar',
              data: this.data.map(v => this.maxValue),
              cursor: 'default',
              itemStyle: {
                normal: {
                  color: countriesTheme.chartInnerLineColor,
                },
                opacity: 1,
              },
              barWidth: '40%',
              barGap: '-100%',
              barCategoryGap: '30%',
              animation: false,
              z: 1,
            },
            { // For bottom line
              type: 'bar',
              data: this.data,
              cursor: 'default',
              itemStyle: {
                normal: {
                  color: countriesTheme.chartLineBottomShadowColor,
                },
                opacity: 1,
              },
              barWidth: '40%',
              barGap: '-100%',
              barCategoryGap: '30%',
              z: 2,
            },
            {
              type: 'bar',
              barWidth: '35%',
              data: this.data,
              cursor: 'default',
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                    offset: 0,
                    color: countriesTheme.chartGradientFrom,
                  }, {
                    offset: 1,
                    color: countriesTheme.chartGradientTo,
                  }]),
                },
              },
              z: 3,
            },
          ],
        });
      });
  }

  public onChartInit(ec): void {
    this.echartsInstance = ec;
  }

  public resizeChart(): void {
    if (this.echartsInstance) {
      this.echartsInstance.resize();
    }
  }

  public ngOnDestroy(): void {
    this._alive = false;
  }
}
