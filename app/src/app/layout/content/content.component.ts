import {
    ChangeDetectionStrategy,
    Component,
    ViewEncapsulation
} from "@angular/core";

@Component({
    selector: "lazy-peon-content",
    templateUrl: "./content.component.html",
    styleUrls: ["./content.component.scss"],
    encapsulation: ViewEncapsulation.Emulated,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LazyPeonContentComponent { }
