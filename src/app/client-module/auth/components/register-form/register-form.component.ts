import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {AuthManagerService} from '../../../../core-module/services/auth-manager.service';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';
import {IRegisterData} from '../../interfaces/register-data.interface';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent {

  public registerForm: FormGroup;

  constructor(private _authService: AuthService,
              private _authManagerService: AuthManagerService,
              private _snackBar: MatSnackBar,
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
              this._showMessage(`Dziękuje my rejestracje. Możesz zalogować się do swojego konta!`, 'Dobra!');
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
