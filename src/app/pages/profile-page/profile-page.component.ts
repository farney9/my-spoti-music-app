import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { Subscription } from 'rxjs';
import { UserStateType } from 'src/app/ngrx/user/user.type';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
})
export class ProfilePageComponent implements OnInit {
  userData$: UserStateType | null = null;
  userDataSubscription$ = new Subscription();

  constructor(private userservice: UserService) {}

  ngOnInit(): void {
    this.userDataSubscription$ = this.userservice
      .getUser()
      .subscribe((userData) => (this.userData$ = userData));
  }

  ngOnDestroy(): void {
    this.userDataSubscription$.unsubscribe();
  }
}
