import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../Core/services/auth';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
})
export class LoginComponent {
  loginForm: FormGroup;
  submitted = false;
  errorMessage = '';
  successMessage = '';
  isLoggedIn = false;

  constructor(private fb: FormBuilder, private auth: AuthService) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    this.submitted = true;
    this.errorMessage = '';
    this.successMessage = '';

    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;

      this.auth.login({ username, password }).subscribe({
        next: (res) => {
          this.successMessage = 'Вхід успішний!';
          console.log('User logged in:', res);
          this.isLoggedIn = true;

          // тут можна зберегти токен, якщо бекенд повертає JWT
          // localStorage.setItem('token', res.token);
        },
        error: (err) => {
          this.errorMessage = 'Невірний логін або пароль.';
          console.error(err);
        },
      });
    }
  }

  @Output() dataEmitter = new EventEmitter<boolean>();

  sendData() {
    this.dataEmitter.emit(this.isLoggedIn);
  }
}
