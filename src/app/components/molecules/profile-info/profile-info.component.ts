import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss'],
})
export class ProfileInfoComponent {
  @Input() displayName: string = '';
  @Input() email: string = '';
  @Input() country: string = '';
  @Input() totalFollowers: number = 0;
}
