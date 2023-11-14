import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegisterFormComponent } from '../register-form/register-form.component';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  standalone: true,
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss',
  imports: [CommonModule, FormsModule, RegisterFormComponent],
})
export class RegisterPageComponent {
  constructor(private _authService: AuthService, private _router: Router) {}

  onRegister(input: any) {
    this._authService.register$(input).subscribe({
      next: (data: any) => {
        console.log('REGISTER OK');
        console.log(data);
        this._router.navigate(['/home']);
      },
      error: (error) => {
        throw new Error(error);
      },
    });
  }
}
