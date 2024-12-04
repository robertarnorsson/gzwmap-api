import { MarkerType, ObjectiveType, objective, task } from "../../types";
import { Gunny } from "../vendors";
import { BanPa, MidnightSapphire, TigerBay, YBL1 } from "../locations";

const TheRebelPath_Objective1: objective = {
    id: "O-6LLT3S",
    name: "LLA Outpost",
    description: "Locate the LLA outpost northwest of YBL-1",
    position: [9813.788012564964, 13940.716618758288],
    type: ObjectiveType.LOCATE,
    types: [MarkerType.TASK, MarkerType.LOCATE, MarkerType.GUNNY, MarkerType.YBL1],
    location: YBL1
}

const TheRebelPath_Objective2: objective = {
    id: "O-07JEMQ",
    name: "LLA Outpost",
    description: "Locate the LLA outpost northwest of Tiger Bay",
    position: [20471.703410219907, 15434.93981131347],
    type: ObjectiveType.LOCATE,
    types: [MarkerType.TASK, MarkerType.LOCATE, MarkerType.GUNNY, MarkerType.TIGERBAY],
    location: TigerBay
}

const TheRebelPath_Objective3: objective = {
    id: "O-FT6DVS",
    name: "LLA Outpost",
    description: "Locate the LLA outpost northeast of Ban Pa",
    position: [23589.5505911418, 17376.833193005452],
    type: ObjectiveType.LOCATE,
    types: [MarkerType.TASK, MarkerType.LOCATE, MarkerType.GUNNY, MarkerType.BANPA],
    location: BanPa
}

const TheRebelPath_Objective4: objective = {
    id: "O-SEN4MG",
    name: "LLA Outpost",
    description: "Locate the LLA outpost west of Midnight Sapphire",
    position: [15349.322421266914, 21605.602736871486],
    type: ObjectiveType.LOCATE,
    types: [MarkerType.TASK, MarkerType.LOCATE, MarkerType.GUNNY, MarkerType.MIDNIGHTSAPPHIRE],
    location: MidnightSapphire
}

export const TheRebelPath: task = {
    id: "T-1YL2XM",
    name: "The Rebel Path",
    briefing: "If the rebels really have outposts like this scattered across the island, we need to initiate a full sweep of the area and identify every last one. We can't leave any potential threats unaccounted for! Analyze the map and pinpoint the locations of the remaining camps. That way, we can eliminate any surprises before they hit us.",
    debriefing: "Nicely done. Let's hope that's really all of their camps. Stay sharp and watch your back. You never know when one of those bastards might pop out of the ground like a pissed-off gopher.",
    objectives: [
      TheRebelPath_Objective1,
      TheRebelPath_Objective2,
      TheRebelPath_Objective3,
      TheRebelPath_Objective4
    ],
    vendor: Gunny,
    level: 0,
    note: "Interact with the big map hanging on the wall by the table in the outpost to start the mission",
    isHidden: true,
}