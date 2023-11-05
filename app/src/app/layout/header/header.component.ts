import {
    ChangeDetectionStrategy,
    Component,
    ViewEncapsulation
} from "@angular/core";
import { LOGO_URL } from "./header.const";

@Component({
    selector: "lazy-peon-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.scss"],
    encapsulation: ViewEncapsulation.Emulated,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LazyPeonHeaderComponent {

    public readonly logoUrl = LOGO_URL;

}
