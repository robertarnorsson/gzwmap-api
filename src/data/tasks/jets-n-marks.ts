import {MarkerType, ObjectiveType, objective, task} from "../../types";
import {Banshee} from "../vendors";
import { FortNarith } from "../locations";
import { GPSTracker } from "../items/tools";

const JetsNMark_Objective1: objective = {
  id: "O-KXG0WS",
  name: "Jet 1",
  description: "Confirm the existence and position of military jet",
  position: [10532.825221734362, 14528.03063935545],
  type: ObjectiveType.MARK,
  types: [MarkerType.TASK, MarkerType.MARK, MarkerType.BANSHEE, MarkerType.FORTNARITH],
  location: FortNarith,
  items: [GPSTracker],
  time: ["22:00", "05:00"]
}

const JetsNMark_Objective2: objective = {
  id: "O-DRQHOC",
  name: "Jet 2",
  description: "Confirm the existence and position of military jet",
  position: [11300.368998988524, 14189.238626171518],
  type: ObjectiveType.MARK,
  image: {
    large: "/assets/objectives/jets-n-marks-jet-2.webp",
    small: "/assets/objectives/thumbnail/jets-n-marks-jet-2.webp"
  },
  types: [MarkerType.TASK, MarkerType.MARK, MarkerType.BANSHEE, MarkerType.FORTNARITH],
  location: FortNarith,
  items: [GPSTracker],
  time: ["22:00", "05:00"]
}

const JetsNMark_Objective3: objective = {
  id: "O-35OXIK",
  name: "Jet 3",
  description: "Confirm the existence and position of military jet",
  position: [11124.46658493078, 14186.320131061748],
  type: ObjectiveType.MARK,
  image: {
    large: "/assets/objectives/jets-n-marks-jet-3.webp",
    small: "/assets/objectives/thumbnail/jets-n-marks-jet-3.webp"
  },
  types: [MarkerType.TASK, MarkerType.MARK, MarkerType.BANSHEE, MarkerType.FORTNARITH],
  location: FortNarith,
  items: [GPSTracker],
  time: ["22:00", "05:00"]
}

export const JetsNMark: task = {
  id: "T-EGNU2M",
  name: "Jets 'n' Marks",
  briefing: "I'm so glad to see you again. Listen, I've got a really easy job I'd like you to do for me. According to my information, there are some fighter jets at Fort Narith. I want you to find them and mark them. Nothing difficult, ain't it? Since I know you're a frequent visitor to the military base, it shouldn't be anything complicated to locate all those jets. What do you say? Nothing too hardcore, right?",
  debriefing: "Based on your description, it appears that the Lamangese received some top-notch junk. Anyways, thanks for your work. Meet me again if you want to make some more coins.",
  objectives: [
    JetsNMark_Objective1,
    JetsNMark_Objective2,
    JetsNMark_Objective3,
  ],
  vendor: Banshee,
  items: [GPSTracker, GPSTracker, GPSTracker],
  level: 0,
}