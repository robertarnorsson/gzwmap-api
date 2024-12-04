import { MarkerType, ObjectiveType, objective, task } from "../../types";
import { Turncoat } from "../vendors";
import { MidnightSapphire } from "../locations";

const ATidingOfMagpies_Objective1: objective = {
  id: "O-28S47L",
  name: "Enemies",
  description: "Neutralize 5 enemies in Chon village",
  position: [16352.240331208413, 20582.548282207325],
  type: ObjectiveType.ELIMINATION,
  types: [MarkerType.TASK, MarkerType.LOCATE, MarkerType.TURNCOAT, MarkerType.MIDNIGHTSAPPHIRE],
  location: MidnightSapphire
}

const ATidingOfMagpies_Objective2: objective = {
  id: "O-PBI0SM",
  name: "Promised Phone",
  description: "Retrive the promised phone and report back to Turncoat",
  position: [16348.166592548398, 20527.92788068477],
  type: ObjectiveType.COLLECT,
  types: [MarkerType.TASK, MarkerType.LOCATE, MarkerType.TURNCOAT, MarkerType.MIDNIGHTSAPPHIRE],
  location: MidnightSapphire
}


export const ATidingOfMagpies: task = {
  id: "T-VIX1HI",
  name: "A Tiding Of Magpies",
  briefing: "No briefing yet.",
  debriefing: "No debriefing yet.",
  objectives: [
    ATidingOfMagpies_Objective1,
    ATidingOfMagpies_Objective2
  ],
  vendor: Turncoat,
  level: 0
}