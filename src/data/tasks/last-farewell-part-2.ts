import { MarkerType, ObjectiveType, objective, task } from "../../types";
import { Gunny } from "../vendors";
import { MidnightSapphire } from "../locations";

const LastFarewellPartTwo_Objective1: objective = {
    id: "O-BSPRD9",
    name: "Body",
    description: "Find the body laying in the grass Northwest of Midnight Sapphire",
    position: [15646.112482183878, 22201.53421690514],
    type: ObjectiveType.LOCATE,
    types: [MarkerType.TASK, MarkerType.LOCATE, MarkerType.GUNNY, MarkerType.MIDNIGHTSAPPHIRE],
    location: MidnightSapphire
}

export const LastFarewellPartTwo: task = {
    id: "T-FXULX0",
    name: "Last Farewell II",
    briefing: "I have yet another fallen colleague: Jason Novak. He fell out of a helicopter during a flyby of Madnight Sapphire. Damn shame we lost him just because he didn't follow security protocols. Dammit, what do I always say? Don't do anything stupid and don't get killed! And he just HAD to do both, didn't he? Sometimes I really think you are all just a bunch of overgrown children running around with guns... I want you to search the Midnight Sapphire Resort area, find his body, and mark it, just like before. The accident happened somewhere around the golf course, so I suggest you go there.",
    debriefing: "That poor stupid bastard. He was one of those that would alwas crack jokes, you know? Never any good ones, though. Guess his final joke was one him. After all, he hit a hole in one.",
    objectives: [
      LastFarewellPartTwo_Objective1
    ],
    vendor: Gunny,
    level: 0,
}