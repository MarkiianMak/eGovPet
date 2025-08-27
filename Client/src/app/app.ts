import { Component, OnInit, signal } from '@angular/core';

import { Nav } from '../nav/nav';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthService } from '../Core/services/auth';
import { AppRoutingModule } from './app.routes';

@Component({
  selector: 'app-root',
  imports: [Nav, ReactiveFormsModule, AppRoutingModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  loggedIn = false;
  username = '';

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.auth.isLoggedIn().subscribe((isLogged) => {
      this.loggedIn = isLogged;
      if (isLogged) {
        this.username = 'користувач';
      }
    });
  }
  logout() {
    this.auth.logout().subscribe(() => {
      this.loggedIn = false;
      this.username = '';
    });
  }
}
