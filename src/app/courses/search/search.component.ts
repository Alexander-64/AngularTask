import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {
  searchQuery = '';

  setSearchQuery(searchQuery: string) {
    if (searchQuery && searchQuery !== this.searchQuery) {
      this.searchQuery = searchQuery;
      console.log(this.searchQuery);
    }
  }
  constructor() { }

  ngOnInit() {
  }
}
