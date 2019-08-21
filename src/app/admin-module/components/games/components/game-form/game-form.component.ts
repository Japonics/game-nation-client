import {Component, Input} from '@angular/core';
import {Game} from '../../../../../shared/models/game';
import {NbDialogRef} from '@nebular/theme';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.scss']
})
export class GameFormComponent {

  @Input() game: Game;

  public gameForm: FormGroup;

  constructor(private _dialogRef: NbDialogRef<GameFormComponent>) {
    this.gameForm = new FormGroup({
      name: new FormControl('', [
        Validators.pattern('^((http:\\/\\/|https:\\/\\/)[a-zA-Z0-9\\-.\\/]{1,})'),
        Validators.required
      ])
    });
  }

  public onSubmit(): void {
    const gameForm: Game = this.gameForm.value;
    this._dialogRef.close(this.game);
  }

  public cancel(): void {
    this._dialogRef.close();
  }

  public getStatusFor(field: string): 'danger' | 'primary' {
    return this.gameForm.controls[field].valid ? 'primary' : 'danger';
  }
}
