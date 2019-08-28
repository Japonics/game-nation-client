import {Component} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ICredentials} from '../../interfaces/credentials.interface';
import {Router} from '@angular/router';
import {NotificationService} from '../../../@core/services/notification.service';
import {NbAuthService, NbTokenService} from '@nebular/auth';
import {DEFAULT_AUTH_STRATEGY} from '../../../@core/constants/app.constants';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  public loginForm: FormGroup;

  constructor(private _authService: AuthService,
              private _nbAuthService: NbAuthService,
              private _nbTokenService: NbTokenService,
              private _notificationService: NotificationService,
              private _translateService: TranslateService,
              private _router: Router) {
    this.loginForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ])
    });
  }

  /**
   * Handle submit event
   */
  public onSubmit(): void {

    const credentials: ICredentials = this.loginForm.value;

    this._nbAuthService
      .authenticate(DEFAULT_AUTH_STRATEGY, credentials)
      .subscribe(result => {
        if (result.isSuccess()) {
          const username: string = result.getToken().getPayload().unique_name;

          this._router.navigate([result.getRedirect()]).then(
            () => this._notificationService.showNotification({
              type: 'success',
              message: this._translateService.instant('AUTH.SUCCESSFULLY_LOGGED', {name: username}),
              title: this._translateService.instant('AUTH.YOU_SUCCESSFULLY_LOGGED')
            })
          );
          return;
        }

        if (result.isFailure()) {
          this._notificationService.showNotification({
            type: 'danger',
            title: '#error',
            message: this._translateService.instant('AUTH.WRONG_USERNAME_OR_PASSWORD')
          });
        }
      });
  }

  public hasError(field: string, validator: string): boolean {
    return this.loginForm.touched
      && this.loginForm.controls[field].errors
      && this.loginForm.controls[field].errors[validator];
  }
}
