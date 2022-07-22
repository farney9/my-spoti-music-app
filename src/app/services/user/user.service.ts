import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { GlobalService } from '../global.service';
import {
  resetUserInfoAction,
  setUserInfoAction,
} from '../../ngrx/user/user.actions';
import { UserStateType } from '../../ngrx/user/user.type';
import { selectorUserState } from 'src/app/ngrx/user/user.selector';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private globalservice: GlobalService, private store: Store) {}

  getSpotifySession(): Promise<UserStateType> {
    return this.globalservice.getQuery('me');
  }

  setUserInfo(user: UserStateType): void {
    this.store.dispatch(setUserInfoAction({ user }));
  }

  syncAppUser(): void {
    this.getSpotifySession().then((data) => this.setUserInfo(data));
  }

  resetUser(): void {
    this.store.dispatch(resetUserInfoAction());
  }

  getUser(): Observable<UserStateType> {
    return this.store.select(selectorUserState);
  }
}
