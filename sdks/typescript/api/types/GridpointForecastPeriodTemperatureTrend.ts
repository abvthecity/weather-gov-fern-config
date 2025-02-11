/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * If not null, indicates a non-diurnal temperature trend for the period (either rising temperature overnight, or falling temperature during the day)
 */
export type GridpointForecastPeriodTemperatureTrend = "rising" | "falling";
export const GridpointForecastPeriodTemperatureTrend = {
    Rising: "rising",
    Falling: "falling",
} as const;
