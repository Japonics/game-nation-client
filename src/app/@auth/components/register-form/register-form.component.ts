import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {IRegisterData} from '../../interfaces/register-data.interface';
import {NotificationService} from '../../../@core/services/notification.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent {

  public registerForm: FormGroup;

  constructor(private _authService: AuthService,
              private _notificationService: NotificationService,
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
          // TODO add translation
          this._router.navigate(['/login']).then(
            () => {
              this._showMessage(`Dziękuje my rejestracje. Możesz zalogować się do swojego konta!`);
            }
          );
        },
        (message: string) => {
          this._showMessage(message);
        }
      );
  }

  public hasError(field: string, validator: string): boolean {
    return this.registerForm.controls[field].errors && this.registerForm.controls[field].errors[validator];
  }

  private _showMessage(message: string): void {
    this._notificationService.showNotification({
      type: 'danger',
      title: '#error',
      message
    });
  }
}
