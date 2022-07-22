import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth/auth.service';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  accessToken$: string | null = null;
  accessTokenSubcription$: Subscription = new Subscription();

  constructor(private http: HttpClient, private authservice: AuthService) {
    this.accessTokenSubcription$ = this.authservice
      .getAcessToken()
      .subscribe((token) => {
        this.accessToken$ = token;
      });
  }

  async handleRequestError(err: any): Promise<any> {
    const accessTokenExpired: string = 'The access token expired';
    const accessTokenInvalid: string = 'Invalid access token';

    const { message } = err.error.error;

    switch (message) {
      case accessTokenExpired:
        return this.authservice.spotifyImplicitGrantLogin();
      case accessTokenInvalid:
        return this.authservice.spotifyImplicitGrantLogin();
      default:
        return await Promise.reject(err);
    }
  }

  async getQuery(query: string): Promise<any> {
    if (!this.accessToken$) return this.authservice.spotifyImplicitGrantLogin();

    const baseUrl: string = `https://api.spotify.com/v1/${query}`;
    const headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${this.accessToken$}`,
    });
    const options: { headers: HttpHeaders } = { headers };
    try {
      return await this.http.get<Promise<any>>(baseUrl, options).toPromise();
    } catch (err: any) {
      await this.handleRequestError(err);
    }
  }

  ngOnDestroy() {
    this.accessTokenSubcription$.unsubscribe();
  }
}
