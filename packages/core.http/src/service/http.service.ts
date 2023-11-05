import { Nullable } from "@lazy-peon/framework.types";

import { ɵHttpCode, ɵHttpVerb } from "../const";

import {
    CONTENT_TYPE_APP_JSON,
    CONTENT_TYPE_HEADER_NAME,
    SUPRESSED_HTTP_CODES
} from "./http.const";

export class HttpService {

    protected async get<TResult>(
        url: string,
        supressedStatusCodes: ReadonlyArray<ɵHttpCode> = SUPRESSED_HTTP_CODES
    ): Promise<Nullable<TResult>> {
        return this.fetchCore(
            url,
            ɵHttpVerb.GET,
            supressedStatusCodes,
            undefined
        );
    }

    private async fetchCore<TPayload, TResult>(
        url: string,
        method: ɵHttpVerb,
        supressedStatusCodes: ReadonlyArray<ɵHttpCode>,
        payload?: TPayload,
    ): Promise<Nullable<TResult>> {
        return fetch(
            url,
            {
                method: method,
                body: payload
                    ? typeof payload === "object"
                        ? JSON.stringify(payload)
                        : payload.toString()
                    : undefined,
                headers: {
                    [CONTENT_TYPE_HEADER_NAME]: CONTENT_TYPE_APP_JSON
                }
            }
        )
        .then(m => m.json())
        .then(m => m as TResult)
        .catch(m => {
            if (supressedStatusCodes.includes(m)) {
                return undefined;
            }
            throw `HttpService::fetchCore has been failed for '${url}' with error '${m}'`;
        });
    }

}