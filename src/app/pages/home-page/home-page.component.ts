import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { Subscription } from 'rxjs';
import { UserStateType } from 'src/app/ngrx/user/user.type';
import {
  optionsType,
  SearchTrackService,
} from 'src/app/services/searchTrack/search-track.service';
import { Item } from 'src/app/ngrx/favorite/favorite.type';
import { FavoriteService } from 'src/app/services/favorite/favorite.service';
import { Store } from '@ngrx/store';
import { resetSearchTrackAction } from 'src/app/ngrx/search-track/searchTrack.actions';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  userData$: UserStateType | null = null;
  favoriteList: Item[] = [];
  resultTrackList: Item[] = [];
  trackListOptions: optionsType = {
    limit: 50,
    offset: 0,
  };
  searchTerm: string = '';

  userDataSubscription$ = new Subscription();
  favoriteSubscription$ = new Subscription();
  trackListSubscription$ = new Subscription();

  constructor(
    private userservice: UserService,
    private searchservice: SearchTrackService,
    private favoriteservice: FavoriteService,
    private store: Store
  ) {}

  async onSearchEnter(event: any): Promise<void> {
    this.searchTerm = event.target.value.trim();
    if (!this.searchTerm.length) return;
    const query = await this.searchservice.querySpotifyForTracks(
      this.searchTerm,
      this.trackListOptions
    );
    this.searchservice.loadTrackList(query.tracks.items);
  }

  isFavorite(track: Item): boolean {
    return this.favoriteList.some((item) => item.id === track.id);
  }

  toggleFavorite(track: Item): void {
    this.isFavorite(track)
      ? this.removeFavorite(track)
      : this.favoriteservice.addFavorite(track);
  }

  addFavorite(track: Item): void {
    this.favoriteservice.addFavorite(track);
  }

  removeFavorite(track: Item): void {
    this.favoriteservice.removeFavorite(track);
  }

  async loadMore(): Promise<void> {
    this.trackListOptions.offset += this.trackListOptions.limit;
    if (!this.searchTerm.length) return;
    const query = await this.searchservice.querySpotifyForTracks(
      this.searchTerm,
      this.trackListOptions
    );
    this.searchservice.loadMoreTrackList(query.tracks.items);
  }

  ngOnInit(): void {
    this.store.dispatch(resetSearchTrackAction());
    this.userDataSubscription$ = this.userservice
      .getUser()
      .subscribe((userData) => {
        this.userData$ = userData;
      });
    this.favoriteSubscription$ = this.favoriteservice
      .getFavorites()
      .subscribe((favoriteList) => {
        this.favoriteList = favoriteList.tracks;
      });
    this.trackListSubscription$ = this.searchservice
      .getTrackList()
      .subscribe((searchTrack) => {
        this.resultTrackList = searchTrack.trackList;
      });
  }

  ngOnDestroy(): void {
    this.userDataSubscription$.unsubscribe();
    this.favoriteSubscription$.unsubscribe();
    this.trackListSubscription$.unsubscribe();
    //this.store.dispatch(resetSearchTrackAction());
  }
}
