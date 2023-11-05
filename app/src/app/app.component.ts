import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { StoriesAction, StoriesSelector } from '../sdk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  

  constructor(
    store: Store
  ) {
    store.dispatch(StoriesAction.fetchLatestStories());
  }

}
