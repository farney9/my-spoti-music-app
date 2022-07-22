import { createAction, props } from '@ngrx/store';
import { PayloadType, TrackList } from './favorite.type';

export const addFavoriteAction = createAction(
  '[Favorite/addFavoriteAction] adds a favorite track',
  props<PayloadType>()
);

export const addFavoriteFunction = (
  state: TrackList,
  payload: PayloadType
): TrackList => {
  return {
    ...state,
    tracks: [...state.tracks, payload.track],
  };
};

export const removeFavoriteAction = createAction(
  '[Favorite/removeFavoriteAction]  removes a favorite track',
  props<PayloadType>()
);

export const removeFavoriteFunction = (
  state: TrackList,
  payload: PayloadType
): TrackList => {
  return {
    ...state,
    tracks: state.tracks.filter((track) => track.id !== payload.track.id),
  };
};

export const resetFavoritesAction = createAction(
  '[Favorite/resetFavoritesAction]  resets all favorites'
);

export const resetFavoritesFunction = (state: TrackList): TrackList => {
  return {
    ...state,
    tracks: [],
  };
};
