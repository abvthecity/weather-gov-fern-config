/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as WeatherGov from "../index";

/**
 * An alert entry in an Atom feed
 */
export interface AlertAtomEntry {
    areaDesc?: string;
    author?: WeatherGov.AlertAtomEntryAuthor;
    category?: string;
    certainty?: string;
    effective?: string;
    event?: string;
    expires?: string;
    geocode?: WeatherGov.AlertXmlParameter[];
    id?: string;
    msgType?: string;
    parameter?: WeatherGov.AlertXmlParameter[];
    polygon?: string;
    published?: string;
    sent?: string;
    severity?: string;
    status?: string;
    summary?: string;
    updated?: string;
    urgency?: string;
}
