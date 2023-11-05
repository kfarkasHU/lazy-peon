import { NgModule } from "@angular/core";
import { LazyPeonStoryItemComponent } from "./story-item.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        LazyPeonStoryItemComponent
    ],
    exports: [
        LazyPeonStoryItemComponent
    ],
    imports: [
        CommonModule
    ]
})
export class LazyPeonStoryItemModule { }
