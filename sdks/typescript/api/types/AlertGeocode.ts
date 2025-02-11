/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as WeatherGov from "../index";

/**
 * Lists of codes for NWS public zones and counties affected by the alert.
 */
export interface AlertGeocode {
    /** A list of SAME (Specific Area Message Encoding) codes for affected counties. */
    SAME?: string[];
    /** A list of NWS public zone or county identifiers. */
    UGC?: WeatherGov.NwsZoneId[];
}
