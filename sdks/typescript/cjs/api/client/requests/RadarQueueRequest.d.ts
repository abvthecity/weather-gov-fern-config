/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as AbvthecityWeatherGov from "../../index";
/**
 * @example
 *     {
 *         arrived: "P1Y2M10DT2H30M/2008-05-11T15:30:00Z",
 *         created: "P1Y2M10DT2H30M/2008-05-11T15:30:00Z",
 *         published: "P1Y2M10DT2H30M/2008-05-11T15:30:00Z"
 *     }
 */
export interface RadarQueueRequest {
    /**
     * Range for arrival time
     */
    arrived?: AbvthecityWeatherGov.Iso8601Interval;
    /**
     * Range for creation time
     */
    created?: AbvthecityWeatherGov.Iso8601Interval;
    /**
     * Originating product feed
     */
    feed?: string;
    /**
     * Record limit
     */
    limit?: number;
    /**
     * Range for publish time
     */
    published?: AbvthecityWeatherGov.Iso8601Interval;
    /**
     * Resolution version
     */
    resolution?: number;
    /**
     * Station identifier
     */
    station?: string;
    /**
     * Record type
     */
    type?: string;
}
