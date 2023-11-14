import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _baseURLAuth = 'http://localhost:8080/api/user/auth';
  private _baseUrl = 'http://localhost:8080/api';
  private _login = 'login';
  private _register = 'register';
  private _logout = 'logout';

  constructor(private _http: HttpClient) {}

  public login$(input: any) {
    return this._http.post(`${this._baseURLAuth}/${this._login}`, {
      username: input.username,
      password: input.password,
    });
  }

  public register$(input: any) {
    return this._http.post(`${this._baseURLAuth}/${this._register}`, {
      username: input.username,
      password: input.password,
    });
  }
}
