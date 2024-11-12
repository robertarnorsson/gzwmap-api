import { MarkerType, ObjectiveType, objective, task } from "../../types";
import { Artisan } from "../vendors";
import { BlueLagoon } from "../locations";

const NightOcean_Objective1_LRI: objective = {
  id: "O-PBQ71L",
  name: "Malo Luangrath",
  description: "Neutralize Malo Luangrath",
  position: [22613.20103410914, 12136.520234294876],
  type: ObjectiveType.ELIMINATION,
  types: [MarkerType.TASK, MarkerType.ELIMINATION, MarkerType.ARTISAN, MarkerType.BLUELAGOON],
  location: BlueLagoon,
  note: "He will spawn in the marketplace area with a black jacket on."
}


export const NightOcean: task = {
  id: "T-0JTO39",
  name: "Night Ocean",
  briefing: "I have one more thing to ask of you, Merc. I need to be sure that the head of this entire sick operation in the Blue Lagoon, at least at this level, has been taken care of. His name is Malo Luangrath, and he has been a blight on the face of this country for long enough. Can you believe he calls himself “Butcher”? He's a sick, evil man with a massive ego and a soul as black as the ocean at night. Get rid of him, mercenary. The world will be a better place once he's gone. Trust me.",
  debriefing: "I can't believe I'm saying this, but thanks. Don't think this makes us friends, though! In my eyes, you are still only slightly better than the man you just killed. Don't forget your place.",
  objectives: [
    NightOcean_Objective1_LRI,
  ],
  vendor: Artisan,
  level: 0
}