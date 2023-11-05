import { HttpService } from "@lazy-peon/core.http";

import { HackernewsStory } from "./hackernews.model";
import { HackernewsServiceConfig } from "./hackernews.config";

export class HackernewsService extends HttpService {

    private readonly _config = new HackernewsServiceConfig();

    public async getLatestStories(): Promise<ReadonlyArray<HackernewsStory>> {
        const storyIdList = await this
            .get<ReadonlyArray<string>>(this._config.getLatestStoriesUrl())
            .then(m => m!)
        ;
        const promises = Promise.allSettled(storyIdList.map(m => this.fetchStorybyId(m)));
        return promises
            .then(m => m.filter(o => o.status === "fulfilled"))
            .then(m => m.map(o => o as PromiseFulfilledResult<HackernewsStory>))
            .then(m => m.map(o => o.value))
        ;
    }

    private async fetchStorybyId(storyId: string): Promise<HackernewsStory> {
        return this.get<HackernewsStory>(
            this._config.getItemUrlById(storyId)
        )
        .then(m => m!)
        .then(m => ({ ...m, date: new Date(m.time * 1000) }))
        ;
    }

}
