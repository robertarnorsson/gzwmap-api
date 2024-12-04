import { MarkerType, ObjectiveType, objective, task } from "../../types";
import { Handshake } from "../vendors";
import { MidnightSapphire } from "../locations";

const RiverfrontView_Objective1: objective = {
    id: "O-DY1P92",
    name: "Scout",
    description: "Find out what happened to the scout in Midnight Sapphire and report back to Handshake",
    position: [16926.58322844973, 22317.98448336648],
    type: ObjectiveType.LOCATE,
    types: [MarkerType.TASK, MarkerType.LOCATE, MarkerType.HANDSHAKE, MarkerType.MIDNIGHTSAPPHIRE],
    location: MidnightSapphire
}

export const RiverfrontView: task = {
    id: "T-PLV5JV",
    name: "Riverfront View",
    briefing: "No briefing yet.",
    debriefing: "No debriefing yet.",
    objectives: [
        RiverfrontView_Objective1,
    ],
    vendor: Handshake,
    level: 0,
}
