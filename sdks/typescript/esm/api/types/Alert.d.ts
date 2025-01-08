/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as AbvthecityWeatherGov from "../index";
/**
 * An object representing a public alert message.
 * Unless otherwise noted, the fields in this object correspond to the National Weather Service CAP v1.2 specification, which extends the OASIS Common Alerting Protocol (CAP) v1.2 specification and USA Integrated Public Alert and Warning System (IPAWS) Profile v1.0. Refer to this documentation for more complete information.
 * http://docs.oasis-open.org/emergency/cap/v1.2/CAP-v1.2-os.html http://docs.oasis-open.org/emergency/cap/v1.2/ipaws-profile/v1.0/cs01/cap-v1.2-ipaws-profile-cs01.html https://alerts.weather.gov/#technical-notes-v12
 */
export interface Alert {
    /** An array of API links for zones affected by the alert. This is an API-specific extension field and is not part of the CAP specification. */
    affectedZones?: string[];
    /** A textual description of the area affected by the alert. */
    areaDesc?: string;
    /** The code denoting the category of the subject event of the alert message. */
    category?: AbvthecityWeatherGov.AlertCategory;
    certainty?: AbvthecityWeatherGov.AlertCertainty;
    /** The text describing the subject event of the alert message. */
    description?: string;
    /** The effective time of the information of the alert message. */
    effective?: string;
    /** The expected end time of the subject event of the alert message. */
    ends?: string;
    /** The text denoting the type of the subject event of the alert message. */
    event?: string;
    /** The expiry time of the information of the alert message. */
    expires?: string;
    /** Lists of codes for NWS public zones and counties affected by the alert. */
    geocode?: AbvthecityWeatherGov.AlertGeocode;
    /** The text headline of the alert message. */
    headline?: string;
    id?: AbvthecityWeatherGov.AlertId;
    /** The text describing the recommended action to be taken by recipients of the alert message. */
    instruction?: string;
    messageType?: AbvthecityWeatherGov.AlertMessageType;
    /** The expected time of the beginning of the subject event of the alert message. */
    onset?: string;
    /**
     * System-specific additional parameters associated with the alert message.
     * The keys in this object correspond to parameter definitions in the NWS CAP specification.
     */
    parameters?: Record<string, unknown[]>;
    /** A list of prior alerts that this alert updates or replaces. */
    references?: AbvthecityWeatherGov.AlertReferencesItem[];
    /**
     * The code denoting the type of action recommended for the target audience.
     * This corresponds to responseType in the CAP specification.
     */
    response?: AbvthecityWeatherGov.AlertResponse;
    /** Email address of the NWS webmaster. */
    sender?: string;
    /** The text naming the originator of the alert message. */
    senderName?: string;
    /** The time of the origination of the alert message. */
    sent?: string;
    severity?: AbvthecityWeatherGov.AlertSeverity;
    status?: AbvthecityWeatherGov.AlertStatus;
    urgency?: AbvthecityWeatherGov.AlertUrgency;
}
