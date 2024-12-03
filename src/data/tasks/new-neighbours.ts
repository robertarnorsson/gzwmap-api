import { MarkerType, ObjectiveType, objective, task } from "../../types";
import { Handshake } from "../vendors";
import { YBL1 } from "../locations";

const NewNeighbours_Objective1: objective = {
    id: "O-S6L0BR",
    name: "Northeast Checkpoint",
    description: "Investigate the checkpoint Northeast of YBL1",
    position: [11409.257145619265, 13457.333182502749],
    type: ObjectiveType.LOCATE,
    types: [MarkerType.TASK, MarkerType.LOCATE, MarkerType.HANDSHAKE, MarkerType.YBL1],
    location: YBL1
}

const NewNeighbours_Objective2: objective = {
    id: "O-KQRJO6",
    name: "Northwest Checkpoint",
    description: "Investigate the checkpoint Northwest of YBL1",
    position: [10491.373113029582, 13769.999694081896],
    type: ObjectiveType.LOCATE,
    types: [MarkerType.TASK, MarkerType.LOCATE, MarkerType.HANDSHAKE, MarkerType.YBL1],
    location: YBL1
}

const NewNeighbours_Objective3: objective = {
    id: "O-3P3JQ5",
    name: "LLA Attack Plans",
    description: "Investigate what is hidden in the jungle West of YBL1 and bring back the LLA Attack Plans",
    position: [9839.140036372512, 13951.291325814962],
    type: ObjectiveType.COLLECT,
    types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.HANDSHAKE, MarkerType.YBL1],
    location: YBL1
}

export const NewNeighbours: task = {
    id: "T-QJ4PEN",
    name: "New Neighbours",
    briefing: "So, are you ready to leave our little playground and go on an actual honest-to-god recon mission, champ? I'm sure you can't wait, so listen up. There's a military base in the western part of our AO. Forth Narith, named after the asshole that used to run this POS country before he disappeared fuck knows where. However, that didn't stop him from leaving his private army, the LAF, behind to guard anything worth something in this shithole. Now, attacking the base itself would be a bad idea, so we'll leave that bit for later. What we can do is scout the area and look for potential outposts that will come in handy when shit hits the fan. And this is where you come in. There's a military complex south of Fort Narith that seems to have been taken over by some squatters. They swarmed the place like locusts and drove the LAF out. We don't know anything about them right now, except that they're not fucking around and they really hate the local military. That means it would be beneficial for us if you could go there, scout the area, and find out who these assholes are. It seems that the natives are wary of this location and affectionately call it The Hole. They avoid it like the plague, but we can't afford to do the same. It's a perfect stepping stone for our operations around the military base. To ignore a strategic point like this would be highly irresponsible on our part. Head out, look for anything that might shed some light on the situation there, and try not to make too much of a mess. Don't just go in and start blasting, ok? First, check the perimeter. We need to see if we can use these people in any way. The enemy of my enemy, got it? There are two bridges leading to Fort Narith that their guys are guarding, so start by gathering intel there, particularly at the outpost closer to the complex. If their patrols disappear, no one can trace it back to us.",
    debriefing: "Yaderny Bunker Lamang 1. An old Soviet bunker? Well, look at that, those commies really were everywhere, eh? And it seems the rebellious natives aren't so afraid of The Hole after all. Just our luck. Lamang Liberation Army. Some fucking freedom fighters starting a new revolution. Shit! I'm beginning to think this island is some kind of fucked up party where everyone's invited. We really don't have time for this crap. Hmm, but now that I think about it, there might be a way to negotiate some kind of alliance with them, or at least a non-aggression treaty. I'll think of something. In the meantime, get some rest, you did well.",
    objectives: [
        NewNeighbours_Objective1,
        NewNeighbours_Objective2,
        NewNeighbours_Objective3
    ],
    vendor: Handshake,
    level: 0,
}