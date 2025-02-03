import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrl: './search-filter.component.scss'
})
export class SearchFilterComponent {

  //emit event from search component to list component
  @Output() searchStringEvent = new EventEmitter<string>();


  //pass the emmitted event from search component to list component
  search(keyword: string) {
    this.searchStringEvent.emit(keyword);
  }

}
