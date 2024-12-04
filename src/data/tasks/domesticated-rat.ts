import { MarkerType, ObjectiveType, objective, task } from "../../types";
import { Handshake } from "../vendors";
import { HuntersParadise } from "../locations";

const DomesticatedRat_Objective1: objective = {
    id: "O-HYQ2FT",
    name: "Contact",
    description: "Go to the shack south of Hunter's Paradise to meet the contact",
    position: [14168.436857955367, 21361.459351658163],
    type: ObjectiveType.LOCATE,
    types: [MarkerType.TASK, MarkerType.LOCATE, MarkerType.HANDSHAKE, MarkerType.HUNTERSPARADISE],
    location: HuntersParadise,
    time: ["22:00", "5:00"]
}

const DomesticatedRat_Objective2: objective = {
    id: "O-BGSL41",
    name: "Intel",
    description: "Go to the hut in the woods east of the shack and secure intel from the contact and hand it over to Handshake",
    position: [15050.517113511756, 21461.395975827752],
    type: ObjectiveType.COLLECT,
    types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.HANDSHAKE, MarkerType.HUNTERSPARADISE],
    location: HuntersParadise
}

export const DomesticatedRat: task = {
    id: "T-98NB07",
    name: "Domesticated Rat",
    briefing: "No briefing yet.",
    debriefing: "No debriefing yet.",
    objectives: [
      DomesticatedRat_Objective1,
      DomesticatedRat_Objective2
    ],
    vendor: Handshake,
    level: 0,
}