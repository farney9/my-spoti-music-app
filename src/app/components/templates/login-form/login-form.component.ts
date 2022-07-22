import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  @Input() logoType: string = 'full';
  @Output() spotifyLogin: EventEmitter<void> = new EventEmitter();

  onClickAuth() {
    this.spotifyLogin.emit();
  }
}
