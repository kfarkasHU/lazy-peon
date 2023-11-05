import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from "@angular/core";
import { IStory } from "../../../../sdk";

@Component({
    selector: "lazy-peon-story-item",
    templateUrl: "./story-item.component.html",
    styleUrls: [
        "./story-item.component.scss"
    ],
    encapsulation: ViewEncapsulation.Emulated,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LazyPeonStoryItemComponent {

    @Input() public item: IStory | undefined;

}
