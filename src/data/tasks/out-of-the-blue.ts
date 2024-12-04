import { MarkerType, ObjectiveType, objective, task } from "../../types";
import { Gunny } from "../vendors";
import { BlueLagoon } from "../locations";

const OutOfTheBlue_Objective1: objective = {
  id: "O-HDJWR5",
  name: "Recon Team",
  description: "Investigate what happened to the reacon team sendt to the Blue Lagoon",
  position: [22625.41998328491, 12513.013347381851],
  type: ObjectiveType.COLLECT,
  types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.GUNNY, MarkerType.GUNNY, MarkerType.BLUELAGOON],
  location: BlueLagoon
}

export const OutOfTheBlue: task = {
  id: "T-IVBZH1",
  name: "Out of the Blue",
  briefing: "No briefing yet.",
  debriefing: "No debriefing yet.",
  objectives: [
    OutOfTheBlue_Objective1,
  ],
  vendor: Gunny,
  level: 0
}