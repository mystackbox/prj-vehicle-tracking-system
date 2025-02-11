import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrl: './search-filter.component.scss',
})
export class SearchFilterComponent {
  //event emmitter object of type <string>
  @Output() searchStringEvent = new EventEmitter<string>();

  /**
   * Emits an event of type string.
   * @param searchKeyword search text or string
   */
  search(keyword: string) {
    this.searchStringEvent.emit(keyword);
  }
}
