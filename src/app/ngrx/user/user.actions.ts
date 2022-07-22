import { createAction, props } from '@ngrx/store';
import { UserStateType } from './user.type';

export const setUserInfoAction = createAction(
  '[User/setUserInfoAction] setting user info',
  props<{
    user: UserStateType;
  }>()
);

export const setUserInfoFunction = (
  _state: UserStateType,
  {
    user,
  }: {
    user: UserStateType;
  }
) => {
  return user;
};

export const resetUserInfoAction = createAction(
  '[User/resetUserInfoAction] reset user info'
);

export const resetUserInfoFunction = () => {
  return {
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
};
