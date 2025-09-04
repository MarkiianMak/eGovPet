import { Component, computed, OnInit, signal } from '@angular/core';

import { Nav } from '../nav/nav';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthService } from '../Core/services/auth';
import { AppRoutingModule } from './app.routes';
import { LoggedIn } from '../Core/services/logged-in';

@Component({
  selector: 'app-root',
  imports: [Nav, ReactiveFormsModule, AppRoutingModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  username = '';

  constructor(private auth: AuthService, public loggedInService: LoggedIn) {}

  ngOnInit() {}

  logout() {
    this.auth.logout().subscribe(() => {
      this.username = '';
    });
  }
}
