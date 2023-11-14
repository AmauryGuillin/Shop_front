import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss',
})
export class RegisterFormComponent {
  @Output() onSubmitRegisterEvent = new EventEmitter();

  public username!: string;
  public password!: string;

  onSubmitRegister() {
    this.onSubmitRegisterEvent.emit({
      username: this.username,
      password: this.password,
    });
  }
}
