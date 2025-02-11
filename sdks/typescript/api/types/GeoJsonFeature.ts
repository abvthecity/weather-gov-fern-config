/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as WeatherGov from "../index";

/**
 * A GeoJSON feature. Please refer to IETF RFC 7946 for information on the GeoJSON format.
 */
export interface GeoJsonFeature {
    "@context"?: WeatherGov.JsonLdContext;
    geometry?: WeatherGov.GeoJsonGeometry;
    id?: string;
    properties: Record<string, unknown>;
    type: "Feature";
}
