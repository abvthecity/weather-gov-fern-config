/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as WeatherGov from "../index";

export interface ObservationStationGeoJson {
    "@context"?: WeatherGov.JsonLdContext;
    geometry?: WeatherGov.GeoJsonGeometry;
    id?: string;
    properties?: WeatherGov.ObservationStation;
    type: "Feature";
}
