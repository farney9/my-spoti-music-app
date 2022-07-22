import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-username-search',
  templateUrl: './username-search.component.html',
})
export class UsernameSearchComponent {
  @Input() username: string | undefined = undefined;
  @Output() onSearchEnter: EventEmitter<any> = new EventEmitter<any>();

  onKeyDownEnter(event: any) {
    this.onSearchEnter.emit(event);
  }
}
