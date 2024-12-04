import { MarkerType, ObjectiveType, objective, task } from "../../types";
import { Banshee } from "../vendors";
import { BanPa } from "../locations";

const DealOfTheCentury_Objective1: objective = {
    id: "O-9ALI1W",
    name: "Documents",
    description: "Collect the documents and hand them over to Banshee",
    position: [10846.68432445328, 14407.485468619687],
    type: ObjectiveType.COLLECT,
    types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.BANSHEE, MarkerType.FORTNARITH],
    location: BanPa,
    note: "Documents are on the second floor"
}

export const DealOfTheCentury: task = {
    id: "T-GA8GE6",
    name: "Deal Of The Century",
    briefing: "No briefing yet.",
    debriefing: "No debriefing yet.",
    objectives: [
        DealOfTheCentury_Objective1,
    ],
    vendor: Banshee,
    level: 0,
}
