/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The code denoting the type of action recommended for the target audience.
 * This corresponds to responseType in the CAP specification.
 */
export type AlertResponse =
    | "Shelter"
    | "Evacuate"
    | "Prepare"
    | "Execute"
    | "Avoid"
    | "Monitor"
    | "Assess"
    | "AllClear"
    | "None";
export const AlertResponse = {
    Shelter: "Shelter",
    Evacuate: "Evacuate",
    Prepare: "Prepare",
    Execute: "Execute",
    Avoid: "Avoid",
    Monitor: "Monitor",
    Assess: "Assess",
    AllClear: "AllClear",
    None: "None",
} as const;
