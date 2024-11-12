import { MarkerType, ObjectiveType, objective, task } from "../../types";
import { Handshake } from "../vendors";
import { MidnightSapphire } from "../locations";

const LeftBehindPartTwo_Objective1: objective = {
    id: "O-QOH2PW",
    name: "Body",
    description: "Find the body laying in the grass near the flag",
    position: [15979.076629630958, 21996.82500708069],
    type: ObjectiveType.LOCATE,
    types: [MarkerType.TASK, MarkerType.LOCATE, MarkerType.HANDSHAKE, MarkerType.MIDNIGHTSAPPHIRE],
    location: MidnightSapphire
}

export const LeftBehindPartTwo: task = {
    id: "T-N54MO5",
    name: "Left Behind II",
    briefing: "I know Sergeant Jackson gave you another one of those body marking jobs. Look, pal, it really breaks my heart to ask you this again, but I need you to just confirm his identity and forget about recovering his remains. The company doesn't need the bad publicity right now. You understand me, right? It's just something that needs to be done. Be swift, and a nice reward will be waiting for you.",
    debriefing: "Nice work, buddy! We must handle this diplomatically. No need to shout our failures when you can whisper them.",
    objectives: [
      LeftBehindPartTwo_Objective1
    ],
    vendor: Handshake,
    level: 0,
}