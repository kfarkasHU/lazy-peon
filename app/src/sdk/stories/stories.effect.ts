import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { HackernewsService } from "@lazy-peon/common.hackernews.sdk";

import { StoriesAction } from "./stories.action";
import { Injectable } from "@angular/core";

@Injectable()
export class StoriesEffect {

    fetchLatestStories$ = createEffect(() => {
        return this._actions$
        .pipe(
            ofType(StoriesAction.fetchLatestStories),
            switchMap(() => this._hackernewsService.getLatestStories()),
            map(m => StoriesAction.fetchLatestStoriesSuccess(m)),
            catchError(() => of(StoriesAction.fetchLatestStoriesFail()))
        )
    });

    constructor(
        private readonly _actions$: Actions,
        private readonly _hackernewsService: HackernewsService
    ) { }

}
