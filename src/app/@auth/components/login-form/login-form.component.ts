import {Component} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ICredentials} from '../../interfaces/credentials.interface';
import {Router} from '@angular/router';
import {IAuthenticated} from '../../interfaces/authenticated.interface';
import {NotificationService} from '../../../@core/services/notification.service';
import {NbAuthService, NbTokenService} from '@nebular/auth';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';

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

    // TODO add const with strategy
    this._nbAuthService
      .authenticate('username', credentials)
      .subscribe(result => {
        console.log(result);
        if (result.isSuccess()) {

        }
      });
  }

  public hasError(field: string, validator: string): boolean {
    return this.loginForm.controls[field].errors && this.loginForm.controls[field].errors[validator];
  }

  private _showMessage(message: string): void {
    this._notificationService.showNotification({
      type: 'danger',
      title: '#error',
      message
    });
  }
}
