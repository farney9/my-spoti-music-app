import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-link-list',
  templateUrl: './nav-link-list.component.html',
  styleUrls: ['./nav-link-list.component.scss'],
})
export class NavLinkListComponent {
  routes$ = [
    {
      to: '/home',
      iconName: 'fa-search',
      label: 'Buscar',
    },
    {
      to: '/favorite',
      iconName: 'fa-heart',
      label: 'Mis favoritos',
    },
    {
      to: '/profile',
      iconName: 'fa-user',
      label: 'Perfil',
    },
  ];
}
