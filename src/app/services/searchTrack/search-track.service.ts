import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Item } from 'src/app/ngrx/favorite/favorite.type';
import {
  loadMoreTrackListAction,
  loadTrackListAction,
} from 'src/app/ngrx/search-track/searchTrack.actions';
import { selectorSearchTrackState } from 'src/app/ngrx/search-track/searchTrack.selector';
import { searchTrackType } from 'src/app/ngrx/search-track/searchTrack.type';
import { GlobalService } from '../global.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchTrackService {
  constructor(private globalservice: GlobalService, private store: Store) {}

  querySpotifyForTracks(
    query: string,
    { limit, offset }: optionsType
  ): Promise<any> {
    const type: string = `track`;
    const market: string = `ES`;

    const q: string = `search?q=${query}&type=${type}&market=${market}&limit=${limit}&offset=${offset}`;

    return this.globalservice.getQuery(q);
  }

  loadTrackList(trackList: Item[]): void {
    this.store.dispatch(loadTrackListAction({ trackList }));
  }

  loadMoreTrackList(trackList: Item[]): void {
    this.store.dispatch(loadMoreTrackListAction({ trackList }));
  }

  getTrackList(): Observable<searchTrackType> {
    return this.store.select(selectorSearchTrackState);
  }
}

export type optionsType = {
  limit: number;
  offset: number;
};
