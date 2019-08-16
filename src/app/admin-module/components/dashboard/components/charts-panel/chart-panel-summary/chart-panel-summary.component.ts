import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-chart-panel-summary',
  templateUrl: './chart-panel-summary.component.html',
  styleUrls: ['./chart-panel-summary.component.scss'],
})
export class ChartPanelSummaryComponent {
  @Input() summary: { title: string; value: number }[];
}

