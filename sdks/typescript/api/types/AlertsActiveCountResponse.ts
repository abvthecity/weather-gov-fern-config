/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface AlertsActiveCountResponse {
    /** Active alerts by area (state/territory) */
    areas?: Record<string, number>;
    /** The total number of active alerts affecting land zones */
    land?: number;
    /** The total number of active alerts affecting marine zones */
    marine?: number;
    /** Active alerts by marine region */
    regions?: Record<string, number>;
    /** The total number of active alerts */
    total?: number;
    /** Active alerts by NWS public zone or county code */
    zones?: Record<string, number>;
}
