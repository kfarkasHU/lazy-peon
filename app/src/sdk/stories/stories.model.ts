export interface IStory {
    id: string;
    type: string;
    by: string;
    date: Date;
    url: string;
    title: string;
}

export interface IStories extends ReadonlyArray<IStory> { }
