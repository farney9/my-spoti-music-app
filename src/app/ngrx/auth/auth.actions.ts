import { createAction, props } from '@ngrx/store';
import {
  AuthStateType,
  LoginPayloadType,
  TokenResponseType,
} from './auth.type';

export const LoginAction = createAction(
  '[Auth/LoginAction] Login sucessfully',
  props<TokenResponseType>()
);

export const loginFunction = (
  state: AuthStateType,
  { access_token, token_type, expires_in }: LoginPayloadType
) => {
  return {
    ...state,
    access_token,
    token_type,
    expires_in,
    isAuthenticated: true,
  };
};

export const LogoutAction = createAction('[Auth/LogoutAction] Logout');

export const logoutFunction = (state: AuthStateType) => {
  return {
    ...state,
    access_token: null,
    token_type: null,
    expires_in: null,
    isAuthenticated: false,
  };
};
