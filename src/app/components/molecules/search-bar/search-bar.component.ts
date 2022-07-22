import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  @Output() onEnter: EventEmitter<any> = new EventEmitter<any>();

  public onSearchEnter(event: any) {
    this.onEnter.emit(event);
  }
}
