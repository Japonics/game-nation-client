import {Component, Input} from '@angular/core';
import {Game} from '../../../../../shared/models/game';
import {NbDialogRef} from '@nebular/theme';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Category} from '../../../../../shared/models/category';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent {

  @Input() category: Category;

  public categoryForm: FormGroup;

  constructor(private _dialogRef: NbDialogRef<CategoryFormComponent>) {
    this.categoryForm = new FormGroup({
      name: new FormControl('', [
        Validators.min(3),
        Validators.max(100),
        Validators.required
      ]),
      description: new FormControl('', [
        Validators.min(20),
        Validators.max(1000),
        Validators.required
      ]),
      cover_image: new FormControl('', [
        Validators.pattern('^((http:\\/\\/|https:\\/\\/)[a-zA-Z0-9\\-.\\/]{1,})'),
        Validators.required
      ])
    });
  }

  public onSubmit(): void {
    const categoryForm: Category = this.categoryForm.value;
    this._dialogRef.close(this.category);
  }

  public cancel(): void {
    this._dialogRef.close();
  }

  public getStatusFor(field: string): 'danger' | 'primary' {
    return this.categoryForm.touched && this.categoryForm.controls[field].valid ? 'primary' : 'danger';
  }

  public hasError(field: string, validator: string): boolean {
    return this.categoryForm.touched
      && this.categoryForm.controls[field].errors
      && this.categoryForm.controls[field].errors[validator];
  }
}
