import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoggedIn } from './logged-in';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:5165/';

  private tokenKey = 'jwt_token';

  constructor(private http: HttpClient, private loggedInService: LoggedIn) {}

  login(username: string, password: string): Observable<string> {
    this.loggedInService.loggedIn.set(true);
    return this.http
      .post<{ token: string }>(`${this.apiUrl}api/auth/login`, {
        username,
        password,
      })
      .pipe(map((res) => res.token));
  }

  register(data: {
    username: string;
    email: string;
    password: string;
  }): Observable<any> {
    return this.http.post(`${this.apiUrl}api/auth/register`, data);
  }

  logout(): Observable<any> {
    return this.http.post(`${this.apiUrl}api/auth/logout`, {});
  }

  saveToken(token: string) {
    localStorage.setItem('jwt', token);
  }

  getToken(): string | null {
    return localStorage.getItem('jwt');
  }
}
