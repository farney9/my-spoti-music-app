import { createReducer, on } from '@ngrx/store';
import {
  addFavoriteAction,
  addFavoriteFunction,
  removeFavoriteAction,
  removeFavoriteFunction,
  resetFavoritesAction,
  resetFavoritesFunction,
} from './favorite.actions';
import { TrackList } from './favorite.type';

export const initialState: TrackList = {
  tracks: [],
};

export const favoriteReducer = createReducer(
  initialState,
  on(addFavoriteAction, addFavoriteFunction),
  on(removeFavoriteAction, removeFavoriteFunction),
  on(resetFavoritesAction, resetFavoritesFunction)
);
