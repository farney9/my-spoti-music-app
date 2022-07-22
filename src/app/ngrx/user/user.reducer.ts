import { createReducer, on } from '@ngrx/store';
import {
  resetUserInfoAction,
  resetUserInfoFunction,
  setUserInfoAction,
  setUserInfoFunction,
} from './user.actions';
import { UserStateType } from './user.type';

export const initialState: UserStateType = {
  country: '',
  display_name: '',
  email: '',
  followers: {
    href: null,
    total: 0,
  },
  href: '',
  id: '',
  images: [],
  product: '',
  type: '',
  uri: '',
};

export const userReducer = createReducer(
  initialState,
  on(setUserInfoAction, setUserInfoFunction),
  on(resetUserInfoAction, resetUserInfoFunction)
);
