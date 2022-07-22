import { createSelector } from '@ngrx/store';
import { TrackList } from './favorite.type';

export const FavoriteState = (store: any): TrackList => {
  return store.favorite;
};

export const selectorFavoriteState = createSelector(
  FavoriteState,
  (favoriteSlice) => favoriteSlice
);
