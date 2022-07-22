import { Component, HostListener } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserService } from 'src/app/services/user/user.service';
import { Subscription } from 'rxjs';
import { UserStateType } from 'src/app/ngrx/user/user.type';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public isOpen: boolean = false;
  public innerWidth: any;
  logoType = 'parcial';
  userData$: UserStateType | null = null;
  userDataSubscription$ = new Subscription();

  constructor(
    private authservice: AuthService,
    private userservice: UserService
  ) {}

  public spotifyLogin(): void {
    this.authservice.spotifyImplicitGrantLogin();
  }

  public toggleMenu() {
    if (this.innerWidth > 810) {
      this.isOpen = true;
    } else {
      this.isOpen = !this.isOpen;
    }
  }

  public logout() {
    this.authservice.logout();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth > 810) {
      this.isOpen = true;
    } else {
      this.isOpen = false;
    }
  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth > 810) {
      this.isOpen = true;
    } else {
      this.isOpen = false;
    }
    this.userservice
      .getUser()
      .subscribe((userData) => (this.userData$ = userData));
  }
}
