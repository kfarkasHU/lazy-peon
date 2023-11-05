import { ɵHttpCode } from "../const";

export const SUPRESSED_HTTP_CODES: ReadonlyArray<ɵHttpCode> = [
    ɵHttpCode.Ok,
    ɵHttpCode.InternalServerError
];

export const CONTENT_TYPE_HEADER_NAME = "Content-Type";
export const CONTENT_TYPE_APP_JSON = "application/json";