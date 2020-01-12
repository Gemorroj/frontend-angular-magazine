import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {catchError, tap} from "rxjs/operators";
import {throwError} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    });

    constructor(private httpClient: HttpClient) {
    }

    login(credentials: { email: string, password: string }) {
        return this.httpClient.post<{ token: string }>(`${environment.api_utl}/authentication_token`, credentials, {headers: this.headers})
            .pipe(
                tap(data => localStorage.setItem('token', data.token)),
                catchError(AuthService.handleError),
            )
    }

    getAccessToken() {
        return localStorage.getItem('token');
    }

    isLoggedIn(): boolean {
        let authToken = localStorage.getItem('token');
        return !!authToken;
    }

    logout(): void {
        localStorage.removeItem('token');
    }

    private static handleError(err: HttpErrorResponse) {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
}
