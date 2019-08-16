import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent {
  @ViewChild('input', {static: true}) input: ElementRef;

  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  public isInputShown = false;

  public showInput(): void {
    this.isInputShown = true;
    this.input.nativeElement.focus();
  }

  public hideInput(): void {
    this.isInputShown = false;
  }

  public onInput(val: string): void {
    this.search.emit(val);
  }
}
