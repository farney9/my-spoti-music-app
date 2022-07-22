import { createReducer, on } from '@ngrx/store';
import {
  loadMoreTrackListAction,
  loadMoreTrackListFunction,
  loadTrackListAction,
  loadTrackListFunction,
  resetSearchTrackAction,
  resetSearchTrackFunction,
} from './searchTrack.actions';
import { searchTrackType } from './searchTrack.type';

export const initialState: searchTrackType = {
  trackList: [],
};

export const searchTrackReducer = createReducer(
  initialState,
  on(loadTrackListAction, loadTrackListFunction),
  on(loadMoreTrackListAction, loadMoreTrackListFunction),
  on(resetSearchTrackAction, resetSearchTrackFunction)
);
