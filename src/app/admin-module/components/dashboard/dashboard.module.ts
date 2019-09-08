import {NgModule} from '@angular/core';
import {
  NbButtonModule,
  NbCardModule,
  NbProgressBarModule,
  NbTabsetModule,
  NbUserModule,
  NbIconModule,
  NbSelectModule,
  NbListModule,
} from '@nebular/theme';
import {NgxEchartsModule} from 'ngx-echarts';
import {NgxChartsModule} from '@swimlane/ngx-charts';

import {ThemeModule} from '../../../@theme/theme.module';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ProfitCardComponent} from './components/profit-card/profit-card.component';
import {ECommerceChartsPanelComponent} from './components/charts-panel/charts-panel.component';
import {OrdersChartComponent} from './components/charts-panel/charts/orders-chart/orders-chart.component';
import {ProfitChartComponent} from './components/charts-panel/charts/profit-chart/profit-chart.component';
import {ChartPanelHeaderComponent} from './components/charts-panel/chart-panel-header/chart-panel-header.component';
import {ChartPanelSummaryComponent} from './components/charts-panel/chart-panel-summary/chart-panel-summary.component';
import {ChartModule} from 'angular2-chartjs';
import {StatsCardBackComponent} from './components/profit-card/back-side/stats-card-back.component';
import {StatsAreaChartComponent} from './components/profit-card/back-side/stats-area-chart.component';
import {StatsBarAnimationChartComponent} from './components/profit-card/front-side/stats-bar-animation-chart.component';
import {StatsCardFrontComponent} from './components/profit-card/front-side/stats-card-front.component';
import {TrafficRevealCardComponent} from './components/traffic-reveal-card/traffic-reveal-card.component';
import {TrafficBarComponent} from './components/traffic-reveal-card/front-side/traffic-bar/traffic-bar.component';
import {TrafficFrontCardComponent} from './components/traffic-reveal-card/front-side/traffic-front-card.component';
import {TrafficCardsHeaderComponent} from './components/traffic-reveal-card/traffic-cards-header/traffic-cards-header.component';
import {TrafficBackCardComponent} from './components/traffic-reveal-card/back-side/traffic-back-card.component';
import {TrafficBarChartComponent} from './components/traffic-reveal-card/back-side/traffic-bar-chart.component';
import {
  ECommerceVisitorsAnalyticsComponent,
} from './components/visitors-analytics/visitors-analytics.component';
import {
  ECommerceVisitorsAnalyticsChartComponent,
} from './components/visitors-analytics/visitors-analytics-chart/visitors-analytics-chart.component';
import {
  ECommerceVisitorsStatisticsComponent,
} from './components/visitors-analytics/visitors-statistics/visitors-statistics.component';
import {ECommerceLegendChartComponent} from './components/legend-chart/legend-chart.component';
import {ECommerceUserActivityComponent} from './components/user-activity/user-activity.component';
import {ECommerceProgressSectionComponent} from './components/progress-section/progress-section.component';
import {SlideOutComponent} from './components/slide-out/slide-out.component';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';
import {EarningCardComponent} from './components/earning-card/earning-card.component';
import {EarningCardBackComponent} from './components/earning-card/back-side/earning-card-back.component';
import {EarningPieChartComponent} from './components/earning-card/back-side/earning-pie-chart.component';
import {EarningCardFrontComponent} from './components/earning-card/front-side/earning-card-front.component';
import {EarningLiveUpdateChartComponent} from './components/earning-card/front-side/earning-live-update-chart.component';

@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbIconModule,
    NbTabsetModule,
    NbSelectModule,
    NbListModule,
    ChartModule,
    NbProgressBarModule,
    NgxEchartsModule,
    NgxChartsModule,
    LeafletModule,
  ],
  declarations: [
    DashboardComponent,
    StatsCardFrontComponent,
    StatsAreaChartComponent,
    StatsBarAnimationChartComponent,
    ProfitCardComponent,
    ECommerceChartsPanelComponent,
    ChartPanelHeaderComponent,
    ChartPanelSummaryComponent,
    OrdersChartComponent,
    ProfitChartComponent,
    StatsCardBackComponent,
    TrafficRevealCardComponent,
    TrafficBarChartComponent,
    TrafficFrontCardComponent,
    TrafficBackCardComponent,
    TrafficBarComponent,
    TrafficCardsHeaderComponent,
    ECommerceVisitorsAnalyticsComponent,
    ECommerceVisitorsAnalyticsChartComponent,
    ECommerceVisitorsStatisticsComponent,
    ECommerceLegendChartComponent,
    ECommerceUserActivityComponent,
    ECommerceProgressSectionComponent,
    SlideOutComponent,
    EarningCardComponent,
    EarningCardFrontComponent,
    EarningCardBackComponent,
    EarningPieChartComponent,
    EarningLiveUpdateChartComponent,
  ],
})
export class DashboardModule {
}
