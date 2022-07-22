import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
//reducers
import { authReducer } from './auth/auth.reducer';
import { favoriteReducer } from './favorite/favorite.reducer';
import { userReducer } from './user/user.reducer';
import { searchTrackReducer } from './search-track/searchTrack.reducer';
import { metaReducers } from './store.persist';

const reducers = {
  auth: authReducer,
  user: userReducer,
  favorite: favoriteReducer,
  searchTrack: searchTrackReducer,
};

@NgModule({
  imports: [StoreModule.forRoot(reducers, { metaReducers })],
  exports: [StoreModule],
})
export class AppStoreModule {}
