import { MarkerType, ObjectiveType, objective, task } from "../../types";
import { LabRat } from "../vendors";
import { Sawmill } from "../locations";

const UpTheStream_Objective1: objective = {
    id: "O-NGFH7Y",
    name: "Source of the Contamination",
    description: "Check the source of the contamination",
    position: [9062.996745288096, 16974.317161971056],
    type: ObjectiveType.LOCATE,
    types: [MarkerType.TASK, MarkerType.LOCATE, MarkerType.LABRAT, MarkerType.SAWMILL],
    location: Sawmill
}

export const UpTheStream: task = {
    id: "T-H318MP",
    name: "Up The Stream",
    briefing: "No briefing yet.",
    debriefing: "No debriefing yet.",
    objectives: [
      UpTheStream_Objective1
    ],
    vendor: LabRat,
    level: 0,
}