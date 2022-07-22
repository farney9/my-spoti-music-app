import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
//modules
import { AppRoutingModule } from './app-routing.module';
import { AppStoreModule } from './ngrx/store.module';
import { AppStoreDevtoolsModule } from './ngrx/dev-tools/devTools.module';
import { HttpClientModule } from '@angular/common/http';
//components
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/templates/layout/layout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { FavoritePageComponent } from './pages/favorite-page/favorite-page.component';
import { AuthService } from './services/auth/auth.service';
import { UserService } from './services/user/user.service';
import { GlobalService } from './services/global.service';
import { SearchTrackService } from './services/searchTrack/search-track.service';
import { FavoriteService } from './services/favorite/favorite.service';
import { TrackListComponent } from './components/templates/track-list/track-list.component';
import { TrackItemsComponent } from './components/organisms/track-items/track-items.component';
import { PageTitleComponent } from './components/atoms/page-title/page-title.component';
import { PageSubtitleComponent } from './components/atoms/page-subtitle/page-subtitle.component';
import { SearchBarComponent } from './components/molecules/search-bar/search-bar.component';
import { IconComponent } from './components/atoms/icon/icon.component';
import { NavLinkListComponent } from './components/templates/nav-link-list/nav-link-list.component';
import { LogoImageComponent } from './components/atoms/logo-image/logo-image.component';
import { HeaderComponent } from './components/templates/header/header.component';
import { UsernameSearchComponent } from './components/organisms/username-search/username-search.component';
import { LoginFormComponent } from './components/templates/login-form/login-form.component';
import { AvatarImgComponent } from './components/molecules/avatar-img/avatar-img.component';
import { ProfileInfoComponent } from './components/molecules/profile-info/profile-info.component';
import { ProfileContainerComponent } from './components/templates/profile-container/profile-container.component';
import { NavLinkComponent } from './components/molecules/nav-link/nav-link.component';
import { NavbarButtonCloseComponent } from './components/molecules/navbar-button-close/navbar-button-close.component';
import { NavbarButtonOpenComponent } from './components/molecules/navbar-button-open/navbar-button-open.component';
import { HeaderLogoComponent } from './components/molecules/header-logo/header-logo.component';
import { BottomButtonsComponent } from './components/molecules/bottom-buttons/bottom-buttons.component';
import { LogoutButtonComponent } from './components/molecules/logout-button/logout-button.component';
import { NavbarComponent } from './components/organisms/navbar/navbar.component';
import { LoadMoreButtonComponent } from './components/molecules/load-more-button/load-more-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    ProfilePageComponent,
    FavoritePageComponent,
    HeaderComponent,
    LayoutComponent,
    TrackListComponent,
    TrackItemsComponent,
    PageTitleComponent,
    PageSubtitleComponent,
    SearchBarComponent,
    IconComponent,
    NavLinkListComponent,
    LogoImageComponent,
    UsernameSearchComponent,
    LoginFormComponent,
    AvatarImgComponent,
    ProfileInfoComponent,
    ProfileContainerComponent,
    NavLinkComponent,
    NavbarButtonCloseComponent,
    NavbarButtonOpenComponent,
    HeaderLogoComponent,
    BottomButtonsComponent,
    LogoutButtonComponent,
    NavbarComponent,
    LoadMoreButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppStoreModule,
    AppStoreDevtoolsModule,
    HttpClientModule,
  ],
  exports: [RouterModule],
  providers: [
    GlobalService,
    AuthService,
    UserService,
    SearchTrackService,
    FavoriteService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
