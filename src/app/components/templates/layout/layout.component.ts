import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  isAuthenticated$: boolean = false;
  authSubscription$ = new Subscription();
  constructor(
    private authservice: AuthService,
    private userservice: UserService
  ) {}

  public init(isAuthenticated: boolean): void {
    this.isAuthenticated$ = isAuthenticated;
    if (isAuthenticated) {
      this.userservice.syncAppUser();
    }
  }

  ngOnInit(): void {
    this.authSubscription$ = this.authservice
      .isAuthorized()
      .subscribe((isAuthenticated) => this.init(isAuthenticated));
    this.authservice.handleImplicitGrantError();
    this.authservice.handleImplicitGrantSuccess();
  }

  ngOnDestroy(): void {
    this.authSubscription$.unsubscribe();
    this.authSubscription$.unsubscribe();
  }
}
