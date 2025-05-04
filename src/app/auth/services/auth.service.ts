import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { CurrentUserInterface } from '../../shared/types/currentUser.interface';
import { AuthResponse } from '../types/authResponse.interface';
import { RegisterRequestInterface } from '../types/registerRequest.interface';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    console.log(data);
    const url = environment.apiUrl + '/users';
    return this.http
      .post<AuthResponse>(url, data)
      .pipe(map((response) => response.user));
  }
}
