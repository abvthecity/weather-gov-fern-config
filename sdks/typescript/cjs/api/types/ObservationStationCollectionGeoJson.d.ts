/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as AbvthecityWeatherGov from "../index";
export interface ObservationStationCollectionGeoJson {
    "@context"?: AbvthecityWeatherGov.JsonLdContext;
    features?: AbvthecityWeatherGov.ObservationStationCollectionGeoJsonFeaturesItem[];
    observationStations?: string[];
    pagination?: AbvthecityWeatherGov.PaginationInfo;
    type: "FeatureCollection";
}
