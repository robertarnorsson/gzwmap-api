import { MarkerType, ObjectiveType, objective, task } from "../../types";
import { LabRat } from "../vendors";
import { HuntersParadise } from "../locations";

const Carnivore_Objective1: objective = {
    id: "O-3F7XPY",
    name: "Biological Sample",
    description: "Collect biological samples from the fridge at Hunter's Paradise",
    position: [14271.482238172774, 21927.366601560356],
    type: ObjectiveType.COLLECT,
    types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.LABRAT, MarkerType.HUNTERSPARADISE],
    location: HuntersParadise
}

export const Carnivore: task = {
    id: "T-KT23J5",
    name: "Carnivore",
    briefing: "The outcome of your last mission troubled me deeply. It's hard to fathom such atrocities occurring at Hunter's Paradise. Could you please investigate further? I need to confirm if the disturbing implications in the note hold any truth. Please explore the range and collect biological samples from its food supply. I'll conduct a thorough analysis, and then we'll be able to uncover the extent of the depravity at that place.",
    debriefing: "I'm afraid the note was accurate. Human remains were indeed detected in these samples. My God, was this some freak accident, or were they truly killing and consuming people? I can't even bear to imagine it. Thank you for your assistance, but to be honest, I would have preferred if you hadn't found anything.",
    objectives: [
        Carnivore_Objective1,
    ],
    vendor: LabRat,
    level: 0,
}
