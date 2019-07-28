import {Component} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {AuthManagerService} from '../../../../core-module/services/auth-manager.service';
import {MatSnackBar} from '@angular/material';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ICredentials} from '../../interfaces/credentials.interface';
import {Router} from '@angular/router';
import {IAuthenticated} from '../../interfaces/authenticated.interface';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  public loginForm: FormGroup;

  constructor(private _authService: AuthService,
              private _authManagerService: AuthManagerService,
              private _snackBar: MatSnackBar,
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

    this._authService
      .login(credentials)
      .subscribe(
        (authenticated: IAuthenticated) => {
          this._authManagerService.loginUser(authenticated);
          this._authService.loadToken(authenticated.token);
          this._router.navigate(['/']).then(
            () => {
              // TODO add translation
              this._showMessage(`Witaj, ${authenticated.user.username}`, 'Cześć!');
            }
          );
        },
        (message: string) => {
          this._showMessage(message, 'Close');
        }
      );
  }

  private _showMessage(message: string, action: string): void {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }
}
