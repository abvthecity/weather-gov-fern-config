/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as WeatherGov from "../index";

export interface AlertCollection {
    pagination?: WeatherGov.PaginationInfo;
    /** A title describing the alert collection */
    title?: string;
    /** The last time a change occurred to this collection */
    updated?: string;
}
