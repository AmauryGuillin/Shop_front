import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from '../login-form/login-form.component';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
  imports: [CommonModule, LoginFormComponent],
})
export class LoginPageComponent implements OnInit {
  constructor(private _authService: AuthService, private _router: Router) {}

  ngOnInit(): void {}

  onLogin(input: any): void {
    this._authService.login$(input).subscribe({
      next: async (data: any) => {
        window.localStorage.setItem('auth_token', JSON.stringify(data));
        await this._router.navigate(['/home']);
        window.location.reload();
      },
      error: (error) => {
        throw new Error('LOGGIN ERROR: ', error);
      },
    });
  }
}
