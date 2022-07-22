import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar-button-open',
  templateUrl: './navbar-button-open.component.html',
  styleUrls: ['./navbar-button-open.component.scss'],
})
export class NavbarButtonOpenComponent {
  @Input() isOpen: boolean = false;
}
