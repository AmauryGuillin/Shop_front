import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
})
export class LoginFormComponent {
  @Output() onSubmitLoginEvent = new EventEmitter();

  username: string = '';
  password: string = '';

  onSubmitLogin(): void {
    this.onSubmitLoginEvent.emit({
      username: this.username,
      password: this.password,
    });
  }
}
