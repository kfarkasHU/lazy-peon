import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Nullable } from "@lazy-peon/framework.types";

import { StoriesSelector, IStories } from "../../../sdk";

import { LOADER_URL } from "./stories-list.const";

@Component({
    selector: "lazy-peon-stories",
    templateUrl: "./stories-list.component.html",
    styleUrls: [
        "./stories-list.component.scss"
    ],
    encapsulation: ViewEncapsulation.Emulated,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class StoriesListContainer implements OnInit {

    public readonly loadingUrl = LOADER_URL;
    public items$: Nullable<Observable<IStories>>;
    public isLoading$: Nullable<Observable<boolean>>;

    constructor(
        private readonly _store: Store
    ) { }

    public ngOnInit(): void {
        this.isLoading$ = this._store.select(StoriesSelector.isLoading);
        this.items$ = this._store.select(StoriesSelector.latestStories);
    }

}
