/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as AbvthecityWeatherGov from "../index";
/**
 * A GeoJSON feature collection. Please refer to IETF RFC 7946 for information on the GeoJSON format.
 */
export interface GeoJsonFeatureCollection {
    "@context"?: AbvthecityWeatherGov.JsonLdContext;
    features: AbvthecityWeatherGov.GeoJsonFeature[];
    type: "FeatureCollection";
}
