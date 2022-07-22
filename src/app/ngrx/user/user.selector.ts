import { createSelector } from '@ngrx/store';
import { UserStateType } from './user.type';

export const UserState = (store: any): UserStateType => {
  return store.user;
};

export const selectorUserState = createSelector(
  UserState,
  (userSlice) => userSlice
);