export enum HackernewsStoryType {
    Job = "job",
    Story = "story",
    Comment = "comment",
    Poll = "poll",
    PollOpt = "pollopt"
}

export interface HackernewsStory {
    id: string;
    type: HackernewsStoryType;
    by: string;
    time: number;
    date: Date;
    url: string;
    title: string;
}
