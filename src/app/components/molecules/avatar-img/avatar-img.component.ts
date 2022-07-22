import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avatar-img',
  templateUrl: './avatar-img.component.html',
  styleUrls: ['./avatar-img.component.scss'],
})
export class AvatarImgComponent {
  @Input() src: string = '';
}
