import { Component, Input } from '@angular/core';
import { Item } from 'src/app/ngrx/favorite/favorite.type';

@Component({
  selector: 'app-track-items',
  templateUrl: './track-items.component.html',
  styleUrls: ['./track-items.component.scss'],
})
export class TrackItemsComponent {
  @Input() track: Item | null = null;
  @Input() isActive?: boolean = false;
}
