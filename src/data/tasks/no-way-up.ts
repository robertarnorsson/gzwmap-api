import { MarkerType, ObjectiveType, objective, task } from "../../types";
import { Gunny } from "../vendors";
import { BanPa } from "../locations";

const NoWayUp_Objective1_LRI: objective = {
  id: "O-AH1GH9",
  name: "PMC Squad",
  description: "Find out what happened to the PMC squad",
  position: [20851.138411996188, 17300.67187547801],
  type: ObjectiveType.LOCATE,
  types: [MarkerType.TASK, MarkerType.LOCATE, MarkerType.GUNNY, MarkerType.BANPA],
  location: BanPa
}


export const NoWayUp: task = {
  id: "T-MBM57E",
  name: "No Way Up",
  briefing: "No briefing yet.",
  debriefing: "No debriefing yet.",
  objectives: [
    NoWayUp_Objective1_LRI,
  ],
  vendor: Gunny,
  level: 0
}