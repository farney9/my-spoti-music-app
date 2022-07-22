import { createSelector } from '@ngrx/store';
import { searchTrackType } from './searchTrack.type';

export const SearchTrackState = (store: any): searchTrackType => {
  return store.searchTrack;
};

export const selectorSearchTrackState = createSelector(
  SearchTrackState,
  (searchTrackSlice) => searchTrackSlice
);
