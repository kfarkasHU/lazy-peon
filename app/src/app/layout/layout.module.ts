import { NgModule } from "@angular/core";

import { LazyPeonHeaderModule } from "./header";
import { LazyPeonFooterModule } from "./footer";
import { LazyPeonContentModule } from "./content";

const SHARED_MODULES = [
    LazyPeonHeaderModule,
    LazyPeonContentModule,
    LazyPeonFooterModule
];

@NgModule({
    imports: [
        ...SHARED_MODULES
    ],
    exports: [
        ...SHARED_MODULES
    ]
})
export class LazyPeonLayoutModule { }
