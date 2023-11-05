import { NgModule } from "@angular/core";
import { StoriesListContainer } from "./stories-list.component";
import { CommonModule } from "@angular/common";
import { LazyPeonStoryItemModule } from "./story-item";

@NgModule({
    imports: [
        CommonModule,
        LazyPeonStoryItemModule
    ],
    declarations: [
        StoriesListContainer
    ],
    exports: [
        StoriesListContainer
    ]
})
export class LazyPeonStoriesListModule { }
