import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  addFavoriteAction,
  removeFavoriteAction,
  resetFavoritesAction,
} from 'src/app/ngrx/favorite/favorite.actions';
import { selectorFavoriteState } from 'src/app/ngrx/favorite/favorite.selectors';
import { Item, TrackList } from 'src/app/ngrx/favorite/favorite.type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  constructor(private store: Store) {}

  getFavorites(): Observable<TrackList> {
    return this.store.select(selectorFavoriteState);
  }

  addFavorite(track: Item): void {
    this.store.dispatch(addFavoriteAction({ track }));
  }

  removeFavorite(track: Item): void {
    this.store.dispatch(removeFavoriteAction({ track }));
  }

  resetFavorites(): void {
    this.store.dispatch(resetFavoritesAction());
  }
}
