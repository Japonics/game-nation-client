import {Component} from '@angular/core';
import {ProfitBarAnimationChartData} from '../../../../../../@core/data/profit-bar-animation-chart';
import {takeWhile} from 'rxjs/operators';

@Component({
  selector: 'app-stats-card-front',
  styleUrls: ['./stats-card-front.component.scss'],
  templateUrl: './stats-card-front.component.html',
})
export class StatsCardFrontComponent {

  private _alive = true;

  public linesData: { firstLine: number[]; secondLine: number[] };

  constructor(private profitBarAnimationChartService: ProfitBarAnimationChartData) {
    this.profitBarAnimationChartService.getChartData()
      .pipe(takeWhile(() => this._alive))
      .subscribe((linesData) => {
        this.linesData = linesData;
      });
  }
}
