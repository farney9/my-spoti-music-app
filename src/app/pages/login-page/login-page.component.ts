import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent {
  logoType = 'full';
  isAuthenticated$: Observable<boolean> = this.authservice.isAuthorized();

  constructor(private authservice: AuthService, private router: Router) {}

  spotifyLogin(): void {
    this.authservice.spotifyImplicitGrantLogin();
  }

  redirectoToHome(): void {
    this.router.navigate(['/home']);
  }

  ngOnInit(): void {
    if (this.isAuthenticated$) this.redirectoToHome();
    this.authservice.handleImplicitGrantError();
    this.authservice.handleImplicitGrantSuccess();
  }
}
