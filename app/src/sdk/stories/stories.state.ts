import { IStories } from "./stories.model";

export interface IStoriesState {
    latestStories: IStories;
    isLoading: boolean;
}
