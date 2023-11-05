import { createAction, props } from "@ngrx/store";

import { IStories } from "./stories.model";

const PREFIX = "[Fetch Stories]";

export namespace StoriesAction {

    export const fetchLatestStories = createAction(`${PREFIX} Latest`);
    export const fetchLatestStoriesFail = createAction(`${PREFIX} Latest Fail`);
    export const fetchLatestStoriesSuccess = createAction(`${PREFIX} Latest Success`, (payload: IStories) => ({ payload }));

}
