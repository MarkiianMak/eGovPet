import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:5165/';

  constructor(private http: HttpClient) {}

  register(data: {
    username: string;
    email: string;
    password: string;
  }): Observable<any> {
    return this.http.post(`${this.apiUrl}api/auth/register`, data);
  }

  login(data: { username: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}api/auth/login`, data);
  }

  logout(): Observable<any> {
    return this.http.post(
      `${this.apiUrl}/api/auth/logout`,
      {},
      { withCredentials: true }
    );
  }

  isLoggedIn(): Observable<boolean> {
    return this.http
      .get<{ username: string }>(`${this.apiUrl}api/auth/me`, {
        withCredentials: true,
      })
      .pipe(
        map((res) => !!res.username),
        catchError(() => of(false))
      );
  }
}
