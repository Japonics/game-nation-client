import {delay, takeWhile} from 'rxjs/operators';
import {AfterViewInit, Component, Input, OnChanges, OnDestroy} from '@angular/core';
import {NbThemeService} from '@nebular/theme';
import {LayoutService} from '../../../../../../@core/utils/layout.service';

declare const echarts: any;

@Component({
  selector: 'app-earning-live-update-chart',
  templateUrl: 'earning-card-front.component.html',
  styleUrls: ['earning-card-front.component.scss'],
})
export class EarningLiveUpdateChartComponent implements AfterViewInit, OnDestroy, OnChanges {

  @Input() liveUpdateChartData: { value: [string, number] }[];

  public option: any;
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

  public ngOnChanges(): void {
    if (this.option) {
      this.updateChartOptions(this.liveUpdateChartData);
    }
  }

  public ngAfterViewInit(): void {
    this.theme.getJsTheme()
      .pipe(
        delay(1),
        takeWhile(() => this._alive),
      )
      .subscribe(config => {
        const earningLineTheme: any = config.variables.earningLine;

        this.setChartOption(earningLineTheme);
      });
  }

  public ngOnDestroy(): void {
    this._alive = false;
  }

  public setChartOption(earningLineTheme): void {
    this.option = {
      grid: {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
      },
      xAxis: {
        type: 'time',
        axisLine: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: false,
        },
      },
      yAxis: {
        boundaryGap: [0, '5%'],
        axisLine: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: false,
        },
      },
      tooltip: {
        axisPointer: {
          type: 'shadow',
        },
        textStyle: {
          color: earningLineTheme.tooltipTextColor,
          fontWeight: earningLineTheme.tooltipFontWeight,
          fontSize: earningLineTheme.tooltipFontSize,
        },
        position: 'top',
        backgroundColor: earningLineTheme.tooltipBg,
        borderColor: earningLineTheme.tooltipBorderColor,
        borderWidth: earningLineTheme.tooltipBorderWidth,
        formatter: params => `$ ${Math.round(parseInt(params.value[1], 10))}`,
        extraCssText: earningLineTheme.tooltipExtraCss,
      },
      series: [
        {
          type: 'line',
          symbol: 'circle',
          sampling: 'average',
          itemStyle: {
            normal: {
              opacity: 0,
            },
            emphasis: {
              opacity: 0,
            },
          },
          lineStyle: {
            normal: {
              width: 0,
            },
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: earningLineTheme.gradFrom,
              }, {
                offset: 1,
                color: earningLineTheme.gradTo,
              }]),
              opacity: 1,
            },
          },
          data: this.liveUpdateChartData,
        },
      ],
      animation: true,
    };
  }

  public updateChartOptions(chartData: { value: [string, number] }[]): void {
    this.echartsInstance.setOption({
      series: [{
        data: chartData,
      }],
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
}
