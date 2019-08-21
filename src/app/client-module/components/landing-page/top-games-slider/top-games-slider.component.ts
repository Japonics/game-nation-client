import {Component} from '@angular/core';
import {IImage} from 'ng-simple-slideshow';

@Component({
  selector: 'app-top-games-slider',
  templateUrl: './top-games-slider.component.html',
  styleUrls: ['./top-games-slider.component.scss']
})
export class TopGamesSliderComponent {

  public games: IImage[] = [];

  constructor() {
  }
}
