import { NgModule } from "@angular/core";

import { LazyPeonContentComponent } from "./content.component";
import { LazyPeonStoriesListModule } from "../../container/stories-list";

@NgModule({
    imports: [
        LazyPeonStoriesListModule
    ],
    declarations: [
        LazyPeonContentComponent
    ],
    exports: [
        LazyPeonContentComponent
    ]
})
export class LazyPeonContentModule { }
