import { NgModule } from "@angular/core";
import { LazyPeonStoriesListModule } from "./stories-list";

@NgModule({
    imports: [
        LazyPeonStoriesListModule
    ],
    exports: [
        LazyPeonStoriesListModule
    ]
})
export class LazyPeonContainerModule { }
