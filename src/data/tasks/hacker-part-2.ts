import {MarkerType, ObjectiveType, objective, task} from "../../types";
import {Handshake} from "../vendors";
import { FortNarith } from "../locations";

const HackerPartTwo_Objective1: objective = {
    id: "O-XRCE5Z",
    name: "Codebook",
    description: "Locate the codebook from the radio room",
    position: [11020.347616030645, 14532.873185881284],
    type: ObjectiveType.COLLECT,
    note: "In the communication room, second floor of the HQ.",
    image: {
    large: "/assets/objectives/hacker-part-2-codebook.webp",
    small: "/assets/objectives/thumbnail/hacker-part-2-codebook.webp"
  },
    types: [MarkerType.TASK, MarkerType.HACK, MarkerType.HANDSHAKE, MarkerType.FORTNARITH],
    location: FortNarith
}

const HackerPartTwo_Objective2: objective = {
    id: "O-M9MN5Q",
    name: "Radio Tower Airfield",
    description: "Hack the radio tower at Fort Narith airfield",
    position: [11469.770714879938, 13914.732245422449],
    type: ObjectiveType.HACK,
    image: {
    large: "/assets/objectives/hacker-2-airfield-radio-tower.webp",
    small: "/assets/objectives/thumbnail/hacker-2-airfield-radio-tower.webp"
  },
    types: [MarkerType.TASK, MarkerType.HACK, MarkerType.HANDSHAKE, MarkerType.FORTNARITH],
    location: FortNarith
}

const HackerPartTwo_Objective3: objective = {
    id: "O-RP689L",
    name: "Radio Tower Base",
    description: "Hack the radio tower in the base",
    position: [11094.402362088738, 14634.004029001182],
    type: ObjectiveType.HACK,
    image: {
    large: "/assets/objectives/hacker-part-2-radio-tower-base.webp",
    small: "/assets/objectives/thumbnail/hacker-part-2-radio-tower-base.webp"
  },
    types: [MarkerType.TASK, MarkerType.HACK, MarkerType.HANDSHAKE, MarkerType.FORTNARITH],
    location: FortNarith
}

const HackerPartTwo_Objective4: objective = {
    id: "O-3HIWGI",
    name: "Satellite",
    description: "Hack the satellite at Fort Narith HQ",
    position: [11089.886228669784, 14455.963878800087],
    type: ObjectiveType.HACK,
    note: "On the roof of the HQ.",
    image: {
    large: "/assets/objectives/hacker-2-satellite.webp",
    small: "/assets/objectives/thumbnail/hacker-2-satellite.webp"
  },
    types: [MarkerType.TASK, MarkerType.HACK, MarkerType.HANDSHAKE, MarkerType.FORTNARITH],
    location: FortNarith
}

export const HackerPartTwo: task = {
    id: "T-U9RTC6",
    name: "Hacker II",
    briefing: "Guess what I have for you, champ. That's right, another clandestine hacking mission. Go to Fort Narith and seize the means of communication. It's not that I dislike utter gibberish, but if that's the only thing we manage to get out of their transmissions, that's just blatantly miserable. Take these apparatuses and hack their transmitters. There should not be the slightest interchange that we do not know about. Also, we need to know what they are saying, so bring back some document that can help us translate the fucking balderdash we are receiving.",
    debriefing: "Sensational! Thanks to your hard work, we now know more about the plans of the Lamang army. Not a single word goes undetected.",
    objectives: [
        HackerPartTwo_Objective1,
        HackerPartTwo_Objective2,
        HackerPartTwo_Objective3,
        HackerPartTwo_Objective4,
    ],
    vendor: Handshake,
    level: 0,
}