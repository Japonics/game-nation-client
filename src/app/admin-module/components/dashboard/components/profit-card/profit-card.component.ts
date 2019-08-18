import {Component} from '@angular/core';

@Component({
  selector: 'app-profit-card',
  templateUrl: './profit-card.component.html',
  styleUrls: ['./profit-card.component.scss'],
})
export class ProfitCardComponent {

  public flipped = false;

  public toggleView(): void {
    this.flipped = !this.flipped;
  }
}
