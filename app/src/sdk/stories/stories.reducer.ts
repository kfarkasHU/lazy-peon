import { createReducer, on } from "@ngrx/store";

import { IStoriesState } from "./stories.state";
import { StoriesAction } from "./stories.action";

const INITIAL_STATE: IStoriesState = {
    latestStories: [],
    isLoading: false
}

export const storiesReducer = createReducer(
    INITIAL_STATE,
    on(StoriesAction.fetchLatestStories, (state) => ({ ...state, isLoading: true })),
    on(StoriesAction.fetchLatestStoriesFail, (state) => ({ ...state, isLoading: false })),
    on(StoriesAction.fetchLatestStoriesSuccess, (state, action) => ({ ...state, isLoading: false, latestStories: action.payload })),
);
