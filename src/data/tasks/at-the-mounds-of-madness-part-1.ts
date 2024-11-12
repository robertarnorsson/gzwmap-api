import { MarkerType, ObjectiveType, objective, task } from "../../types";
import { Artisan } from "../vendors";
import { BanPa } from "../locations";
import { Difficulty3 } from "../difficulty";

const AtTheMoundsOfMadnessPartOne_Objective1: objective = {
    id: "O-A8VMNP",
    name: "Ominous mural",
    description: "Find an ominous mural",
    position: [23002.453108533176, 15703.731091965486],
    type: ObjectiveType.LOCATE,
    types: [MarkerType.TASK, MarkerType.LOCATE, MarkerType.ARTISAN, MarkerType.BANPA, MarkerType.DIFFICULTY_3],
    location: BanPa,
    difficulty: Difficulty3
}

const AtTheMoundsOfMadnessPartOne_Objective2: objective = {
    id: "O-LE9HF8",
    name: "Eerie mural",
    description: "Find an eerie mural",
    position: [22927.08971980861, 16082.924417897804],
    type: ObjectiveType.LOCATE,
    types: [MarkerType.TASK, MarkerType.LOCATE, MarkerType.ARTISAN, MarkerType.BANPA, MarkerType.DIFFICULTY_3],
    location: BanPa,
    difficulty: Difficulty3
}

const AtTheMoundsOfMadnessPartOne_Objective3: objective = {
    id: "O-NXMOQ7",
    name: "Chilling mural",
    description: "Find a chilling mural",
    position: [23243.91895304809, 16122.161938222464],
    type: ObjectiveType.LOCATE,
    types: [MarkerType.TASK, MarkerType.LOCATE, MarkerType.ARTISAN, MarkerType.BANPA, MarkerType.DIFFICULTY_3],
    location: BanPa,
    difficulty: Difficulty3
}

const AtTheMoundsOfMadnessPartOne_Objective4: objective = {
    id: "O-J5JJL9",
    name: "Disturbing statue",
    description: "Find a disturbing statue",
    position: [23354.782997580827, 16062.182871592066],
    type: ObjectiveType.LOCATE,
    types: [MarkerType.TASK, MarkerType.LOCATE, MarkerType.ARTISAN, MarkerType.BANPA, MarkerType.DIFFICULTY_3],
    location: BanPa,
    difficulty: Difficulty3
}

export const AtTheMoundsOfMadnessPartOne: task = {
    id: "T-GOTOAG",
    name: "At the Mounds of Madness",
    briefing: "Hey, merc. I've noticed you've been taking little sightseeing trips to Ban Pa. This is all probably some big fucking joke to Mr big-dick stone-cold-killer like you, but people here were terrified just to go near that place, and when somebody did, they would find them later cut to pieces lying in a ditch somewhere with their faces torn to shreds. Cut off limbs, eyes gauged out, nose and ears missing… I know it's giving you a hard-on just thinking about it, but for people that aren't fucking evil, this is not okay. I want to know what was happening there and why. The most widespread rumors were about some kind of cult worshipping dark spirits, so I want you to go there and look around for anything like that. Murals, statues, weird symbols, anything, ok? I'd normally say be careful, but honestly, I couldn't care less. If you get killed, I'll just find somebody else to do it.",
    debriefing: "Really? This is what you found out? Honestly, it looks like a complete amateur hour. All this cult shit was most likely used only to scare people off. The question is why… Run along, merc. You did your job; now get out of my sight.",
    objectives: [
        AtTheMoundsOfMadnessPartOne_Objective1,
        AtTheMoundsOfMadnessPartOne_Objective2,
        AtTheMoundsOfMadnessPartOne_Objective3,
        AtTheMoundsOfMadnessPartOne_Objective4,
    ],
    vendor: Artisan,
    level: 0,
    difficulty: Difficulty3
}
