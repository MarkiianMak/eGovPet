import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../Core/services/auth';
import { Output, EventEmitter } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LoggedIn } from '../Core/services/logged-in';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.html',
})
export class LoginComponent {
  loginForm: FormGroup;
  submitted = false;
  errorMessage = '';
  successMessage = '';

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private loggedInService: LoggedIn
  ) {
    this.loginForm = this.fb.group({
      username: [''],
      password: [''],
    });
  }

  onSubmit() {
    this.submitted = true;
    this.errorMessage = '';
    this.successMessage = '';

    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.auth.login(username, password).subscribe({
        next: (token) => {
          this.loggedInService.loggedIn.set(true);
          this.auth.saveToken(token);
          alert('Login successful');
          this.router.navigate(['/home']);
        },
        error: () => alert('Login failed'),
      });
    }
  }
}
