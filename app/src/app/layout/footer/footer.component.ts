import {
    ChangeDetectionStrategy,
    Component,
    ViewEncapsulation
} from "@angular/core";

@Component({
    selector: "lazy-peon-footer",
    templateUrl: "./footer.component.html",
    styleUrls: ["./footer.component.scss"],
    encapsulation: ViewEncapsulation.Emulated,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LazyPeonFooterComponent {

    public readonly year = (new Date()).getFullYear();

}
