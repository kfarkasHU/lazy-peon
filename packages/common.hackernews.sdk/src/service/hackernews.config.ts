import {
    HACKERNEWS_BASE_URL,
    ITEM_BY_ID,
    LATEST_STORIES_PATH
} from "./hackernews.const";

export class HackernewsServiceConfig {

    public getLatestStoriesUrl(): string {
        return `${HACKERNEWS_BASE_URL}${LATEST_STORIES_PATH}`;
    }

    public getItemUrlById(id: string): string {
        return `${HACKERNEWS_BASE_URL}${ITEM_BY_ID}/${id}.json`;
    }

}
