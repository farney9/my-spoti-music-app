import { createAction, props } from '@ngrx/store';
import { searchTrackType } from './searchTrack.type';

export const loadTrackListAction = createAction(
  '[SearchTrack] Load Track List',
  props<searchTrackType>()
);

export const loadTrackListFunction = (
  state: searchTrackType,
  { trackList }: searchTrackType
) => {
  return {
    ...state,
    trackList,
  };
};

export const loadMoreTrackListAction = createAction(
  '[SearchTrack] Load More Track List',
  props<searchTrackType>()
);

export const loadMoreTrackListFunction = (
  state: searchTrackType,
  { trackList }: searchTrackType
) => {
  return {
    ...state,
    trackList: [...state.trackList, ...trackList],
  };
};

export const resetSearchTrackAction = createAction(
  '[SearchTrack] Reset Search Track'
);

export const resetSearchTrackFunction = (state: searchTrackType) => {
  return {
    ...state,
    trackList: [],
  };
};
