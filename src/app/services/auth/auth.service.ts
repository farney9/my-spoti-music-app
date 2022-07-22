import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Subscription, Observable } from 'rxjs';
import { LoginAction, LogoutAction } from 'src/app/ngrx/auth/auth.actions';
import { selectorAuthState } from 'src/app/ngrx/auth/auth.selector';
import { environment } from '././../../../environments/environment';
import { AuthStateType, TokenResponseType } from 'src/app/ngrx/auth/auth.type';
import { resetUserInfoAction } from 'src/app/ngrx/user/user.actions';
import { resetFavoritesAction } from 'src/app/ngrx/favorite/favorite.actions';
import { resetSearchTrackAction } from 'src/app/ngrx/search-track/searchTrack.actions';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated$: boolean = false;
  authSubscription$ = new Subscription();

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  isAuthStateValid(authState: AuthStateType): boolean {
    if (
      authState.access_token &&
      authState.expires_in &&
      authState.expires_in > Date.now() &&
      authState.isAuthenticated
    ) {
      return true;
    }

    return false;
  }

  isAuthorized(): Observable<boolean> {
    return this.store
      .select(selectorAuthState)
      .pipe(
        map((auth) =>
          auth.isAuthenticated && auth.access_token ? true : false
        )
      );
  }

  getAcessToken(): Observable<string | null> {
    return this.store
      .select(selectorAuthState)
      .pipe(map((auth) => auth.access_token));
  }

  spotifyImplicitGrantLogin(): void {
    const client_id = environment.client_id;
    const redirect_uri = environment.redirect_uri;

    location.replace(
      `https://accounts.spotify.com/authorize?response_type=token&client_id=${client_id}&scope=user-read-private user-read-email&redirect_uri=${redirect_uri}&state=123`
    );
  }

  decodeUrlFragment(fragment: string | null): TokenResponseType | null {
    if (fragment) {
      let authObject = fragment.split('&').map((item) => item.split('='));
      return {
        access_token: authObject[0][1],
        token_type: authObject[1][1],
        expires_in: parseInt(authObject[2][1], 10),
      };
    }
    return null;
  }

  handleImplicitGrantError(): void {
    let error: string | null = null;
    this.route.queryParamMap.subscribe((params) => {
      error = params.get('error');
    });
    if (error) {
      this.store.dispatch(LogoutAction());
      this.router.navigate(['/login']);
    }
  }

  handleImplicitGrantSuccess(): void {
    let token: TokenResponseType | null = null;
    this.route.fragment.subscribe((fragment) => {
      token = this.decodeUrlFragment(fragment);
    });

    if (token) {
      this.store.dispatch(LoginAction(token));
      this.router.navigate(['/home']);
    }
  }

  logout(): void {
    this.store.dispatch(LogoutAction());
    this.store.dispatch(resetUserInfoAction());
    this.store.dispatch(resetFavoritesAction());
    this.store.dispatch(resetSearchTrackAction());
    this.router.navigate(['/login']);
  }
}