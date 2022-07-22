import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo-image',
  templateUrl: './logo-image.component.html',
  styleUrls: ['./logo-image.component.scss'],
})
export class LogoImageComponent {
  @Input() typeLogo = 'full';
  logoFull: string = '../../../../assets/images/login-logo.png';
  logoParcial: string = '../../../../assets/images/login-logo.png';
}
