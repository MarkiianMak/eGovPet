import { Component, computed, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from '../login/login';
import { RouterModule } from '@angular/router';
import { AuthService } from '../Core/services/auth';
import { LoggedIn } from '../Core/services/logged-in';

@Component({
  selector: 'app-nav',
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {
  constructor(private auth: AuthService, public loggedInService: LoggedIn) {}

  logout() {
    this.auth.logout().subscribe(() => {
      this.loggedInService.loggedIn.set(false);
    });
  }
}
