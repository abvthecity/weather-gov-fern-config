/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as WeatherGov from "../../index";

/**
 * @example
 *     {}
 */
export interface ObsStationsRequest {
    /**
     * Pagination cursor
     */
    cursor?: string;
    /**
     * Filter by observation station ID
     */
    id?: string | string[];
    /**
     * Limit
     */
    limit?: number;
    /**
     * Filter by state/marine area code
     */
    state?: WeatherGov.AreaCode | WeatherGov.AreaCode[];
}
