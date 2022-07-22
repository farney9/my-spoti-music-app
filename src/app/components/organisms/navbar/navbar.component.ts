import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Output() handleClose: EventEmitter<void> = new EventEmitter();
  @Output() handleLogout: EventEmitter<void> = new EventEmitter();
  @Input() logoType: string = 'parcial';
  @Input() displayName: string = '';

  handleCloseClick(): void {
    this.handleClose.emit();
  }

  handleLogoutClick(): void {
    this.handleLogout.emit();
  }
}
