import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
  STORIES_FEATURE_NAME,
  StoriesEffect,
  storiesReducer
} from '../sdk';
import { EffectsModule } from '@ngrx/effects';
import { HackernewsService } from '@lazy-peon/common.hackernews.sdk';
import { LazyPeonLayoutModule } from './layout';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      [STORIES_FEATURE_NAME]: storiesReducer
    }),
    EffectsModule.forRoot([
      StoriesEffect
    ]),
    AppRoutingModule,
    LazyPeonLayoutModule
  ],
  providers: [
    {
      provide: HackernewsService,
      useClass: HackernewsService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
