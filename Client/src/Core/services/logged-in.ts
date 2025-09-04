import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggedIn {
  loggedIn = signal(false);
}
