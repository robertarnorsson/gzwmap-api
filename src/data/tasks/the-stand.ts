import { MarkerType, ObjectiveType, objective, task } from "../../types";
import { Gunny } from "../vendors";
import { PhaLangAirfield } from "../locations";

const TheStand_Objective1: objective = {
  id: "O-T6JHBB",
  name: "PMC 1",
  description: "Locate the missing squad member",
  position: [17127.469288514167, 19797.89059866562],
  type: ObjectiveType.LOCATE,
  types: [MarkerType.TASK, MarkerType.LOCATE, MarkerType.GUNNY, MarkerType.PHALANGAIRFIELD],
  location: PhaLangAirfield
}

const TheStand_Objective2: objective = {
  id: "O-8E951S",
  name: "PMC 2",
  description: "Locate the missing squad member",
  position: [17136.898885987426, 19798.20009472712],
  type: ObjectiveType.LOCATE,
  types: [MarkerType.TASK, MarkerType.LOCATE, MarkerType.GUNNY, MarkerType.PHALANGAIRFIELD],
  location: PhaLangAirfield,
}

const TheStand_Objective3: objective = {
  id: "O-2HSZG3",
  name: "PMC 3",
  description: "Locate the missing squad member",
  position: [17056.543934200712, 19828.22861149334],
  type: ObjectiveType.LOCATE,
  types: [MarkerType.TASK, MarkerType.LOCATE, MarkerType.GUNNY, MarkerType.PHALANGAIRFIELD],
  location: PhaLangAirfield
}

const TheStand_Objective4: objective = {
  id: "O-E8KES6",
  name: "PMC 4",
  description: "Locate the missing squad member",
  position: [17078.38327406212, 19884.80640221108],
  type: ObjectiveType.LOCATE,
  types: [MarkerType.TASK, MarkerType.LOCATE, MarkerType.GUNNY, MarkerType.PHALANGAIRFIELD],
  location: PhaLangAirfield
}

export const TheStand: task = {
  id: "T-TIP36F",
  name: "The Stand",
  briefing: "No briefing yet.",
  debriefing: "No debriefing yet.",
  objectives: [
    TheStand_Objective1,
    TheStand_Objective2,
    TheStand_Objective3,
    TheStand_Objective4,
  ],
  vendor: Gunny,
  level: 0
}