import { MarkerType, ObjectiveType, objective, task } from "../../types";
import { Gunny } from "../vendors";
import { BlueLagoon, HuntersParadise } from "../locations";

const TheLull_Objective1: objective = {
  id: "O-OGWSQ4",
  name: "Old Hut",
  description: "Find out what happened in the jungle southwest of Hunter's Paradise",
  position: [13511.251888219374, 21267.761400720385],
  type: ObjectiveType.LOCATE,
  types: [MarkerType.TASK, MarkerType.LOCATE, MarkerType.GUNNY, MarkerType.GUNNY, MarkerType.HUNTERSPARADISE],
  location: HuntersParadise
}

export const TheLull: task = {
  id: "T-67TA3U",
  name: "The Lull",
  briefing: "No briefing yet.",
  debriefing: "No debriefing yet.",
  objectives: [
    TheLull_Objective1,
  ],
  vendor: Gunny,
  level: 0
}