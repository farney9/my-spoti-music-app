import { ActionReducer, MetaReducer } from '@ngrx/store';
import {
  Keys,
  LocalStorageConfig,
  localStorageSync,
} from 'ngrx-store-localstorage';

const appname: string = 'my-music-app';

const encryptor: (message: string) => string = (state: string) =>
  global.Buffer.from(state).toString('base64');

const decryptor: (message: string) => string = (state: string) =>
  global.Buffer.from(state, 'base64').toString('utf8');

const whiteList: Keys = [
  {
    auth: {
      encrypt: encryptor,
      decrypt: decryptor,
    },
  },
  {
    user: {
      encrypt: encryptor,
      decrypt: decryptor,
    },
  },
  {
    favorite: {
      encrypt: encryptor,
      decrypt: decryptor,
    },
  },
  {
    searchTrack: {
      encrypt: encryptor,
      decrypt: decryptor,
    },
  },
];

const config: LocalStorageConfig = {
  keys: whiteList,
  rehydrate: true,
  storageKeySerializer: (message: string) => `${appname}__${message}`,
};

const localStorageSyncReducer: any = (reducer: any) =>
  localStorageSync(config)(reducer);

export const metaReducers: Array<MetaReducer<any, any>> = [
  localStorageSyncReducer,
];
