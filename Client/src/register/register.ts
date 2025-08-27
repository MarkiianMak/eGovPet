import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../Core/services/auth';
import { ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.html',
  imports: [ReactiveFormsModule, CommonModule],
})
export class RegisterComponent {
  registerForm: FormGroup;
  submitted = false;
  successMessage = '';
  errorMessage = '';

  constructor(private fb: FormBuilder, private auth: AuthService) {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    console.log(this.registerForm.value);

    this.submitted = true;
    this.successMessage = '';
    this.errorMessage = '';

    // if (this.registerForm.valid) {
    const { username, email, password } = this.registerForm.value;

    this.auth.register({ username, email, password }).subscribe({
      next: (res) => {
        this.successMessage = 'Реєстрація успішна!';
        console.log('Користувач зареєстрований:', res);
        this.registerForm.reset();
        this.submitted = false;
      },
      error: (err) => {
        this.errorMessage = 'Помилка реєстрації. Спробуйте ще раз.';
        console.error(err);
      },
    });
  }
  // }
}
