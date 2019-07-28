import {Directive, Input} from '@angular/core';
import {Validator, ValidationErrors, FormGroup, NG_VALIDATORS} from '@angular/forms';
import {matchValueValidator} from '../validators/match-value.validator';

@Directive({
  selector: '[appMatchValue]',
  providers: [{provide: NG_VALIDATORS, useExisting: MatchValueDirective, multi: true}]
})
export class MatchValueDirective implements Validator {

  @Input('appMatchValue') matchValueFields: string[] = [];

  constructor() {
  }

  public validate(formGroup: FormGroup): ValidationErrors {
    return matchValueValidator(this.matchValueFields[0], this.matchValueFields[1])(formGroup);
  }
}
