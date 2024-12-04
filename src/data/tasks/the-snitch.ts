import { MarkerType, ObjectiveType, objective, task } from "../../types";
import { Banshee } from "../vendors";
import { TigerBay } from "../locations";
import { TBCemStr } from "../keys/tiger-bay";

const TheSnitch_Objective1: objective = {
    id: "O-ZLK9EA",
    name: "Informant's House",
    description: "Go to the informant's house in Tiger Bay and find out what happened to him",
    position: [22118.361714800194, 14321.479011467425],
    type: ObjectiveType.LOCATE,
    types: [MarkerType.TASK, MarkerType.LOCATE, MarkerType.BANSHEE, MarkerType.TIGERBAY],
    location: TigerBay
}

const TheSnitch_Objective2: objective = {
    id: "O-B2EQXZ",
    name: "Informant",
    description: "Go to the cement factory in Tiger Bay and find out what happened to the informant",
    position: [21229.572007649287, 15060.722027079019],
    type: ObjectiveType.LOCATE,
    types: [MarkerType.TASK, MarkerType.LOCATE, MarkerType.BANSHEE, MarkerType.TIGERBAY],
    location: TigerBay,
    key: TBCemStr
}

export const TheSnitch: task = {
    id: "T-JG5OB7",
    name: "The Snitch",
    briefing: "No briefing yet.",
    debriefing: "No debriefing yet.",
    objectives: [
        TheSnitch_Objective1,
        TheSnitch_Objective2
    ],
    vendor: Banshee,
    key: [TBCemStr],
    level: 0,
}
