import { MarkerType, ObjectiveType, objective, task } from "../../types";
import { Banshee } from "../vendors";
import { TigerBay } from "../locations";
import { GPSTracker } from "../items/tools";

const DishonestPractices_Objective1: objective = {
    id: "O-IM5E75",
    name: "Weapon Case",
    description: "Mark the weapon case between 22:00 and 05:00 and report back to Banshee",
    position: [22352.42662104574, 14452.025530787709],
    type: ObjectiveType.MARK,
    types: [MarkerType.TASK, MarkerType.MARK, MarkerType.BANSHEE, MarkerType.TIGERBAY],
    location: TigerBay,
    items: [GPSTracker],
    time: ["22:00", "05:00"]
}

export const DishonestPractices: task = {
    id: "T-9AXPWV",
    name: "Dishonest Practices",
    briefing: "No briefing yet.",
    debriefing: "No debriefing yet.",
    objectives: [
        DishonestPractices_Objective1,
    ],
    vendor: Banshee,
    items: [GPSTracker],
    level: 0,
}
