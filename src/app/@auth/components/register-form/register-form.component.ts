import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {IRegisterData} from '../../interfaces/register-data.interface';
import {NotificationService} from '../../../@core/services/notification.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent {

  public registerForm: FormGroup;

  constructor(private _authService: AuthService,
              private _notificationService: NotificationService,
              private _translateService: TranslateService,
              private _router: Router) {
    this.registerForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      email: new FormControl('', [
        Validators.email,
        Validators.required,
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ])
    });
  }

  /**
   * Handle submit event
   */
  public onSubmit(): void {

    const registerData: IRegisterData = this.registerForm.value;

    this._authService
      .registerUser(registerData)
      .subscribe(
        () => {
          this._router.navigate(['/login']).then(
            () => {
              this._notificationService.showNotification({
                type: 'success',
                title: this._translateService.instant('AUTH.REGISTER_SUCCESSFULLY_WELCOME', {name: registerData.username}),
                message: this._translateService.instant('AUTH.REGISTER_SUCCESSFULLY_MESSAGE')
              });
            }
          );
        },
        (message: string) => {
          this._notificationService.showNotification({
            type: 'danger',
            title: '#error',
            message
          });
        }
      );
  }

  public hasError(field: string, validator: string): boolean {
    return this.registerForm.touched
      && this.registerForm.controls[field].errors
      && this.registerForm.controls[field].errors[validator];
  }
}
