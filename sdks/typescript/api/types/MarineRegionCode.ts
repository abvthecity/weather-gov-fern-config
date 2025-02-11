/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Marine region code. These are groups of marine areas combined.
 * * AL: Alaska waters (PK)
 * * AT: Atlantic Ocean (AM, AN)
 * * GL: Great Lakes (LC, LE, LH, LM, LO, LS, SL)
 * * GM: Gulf of Mexico (GM)
 * * PA: Eastern Pacific Ocean and U.S. West Coast (PZ)
 * * PI: Central and Western Pacific (PH, PM, PS)
 */
export type MarineRegionCode = "AL" | "AT" | "GL" | "GM" | "PA" | "PI";
export const MarineRegionCode = {
    Al: "AL",
    At: "AT",
    Gl: "GL",
    Gm: "GM",
    Pa: "PA",
    Pi: "PI",
} as const;
