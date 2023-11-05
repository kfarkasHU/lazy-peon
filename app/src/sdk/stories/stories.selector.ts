import { createFeatureSelector, createSelector } from "@ngrx/store";

import { IStoriesState } from "./stories.state";
import { FEATURE_NAME } from "./stories.const";

export namespace StoriesSelector {

    export const storiesState = createFeatureSelector<IStoriesState>(FEATURE_NAME);

    export const isLoading = createSelector(storiesState, state => state.isLoading);

    export const latestStories = createSelector(storiesState, state => state.latestStories);

}
