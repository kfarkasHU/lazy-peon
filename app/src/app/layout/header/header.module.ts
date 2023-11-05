import { NgModule } from "@angular/core";

import { LazyPeonHeaderComponent } from "./header.component";

@NgModule({
    declarations: [
        LazyPeonHeaderComponent
    ],
    exports: [
        LazyPeonHeaderComponent
    ]
})
export class LazyPeonHeaderModule { }
