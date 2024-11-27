import { MarkerType, ObjectiveType, objective, task } from "../../types";
import { Gunny } from "../vendors";
import {
  CrimsonShieldInternational,
  LamangRecoveryInitiative,
  MithrasSecuritySystems
} from "../factions";
import { GPSTracker } from "../items/tools";
import { CacheRetrieval } from "../tasks/cache-retrieval";
import { KiuVongsa, NamThaven, PhaLang } from "../locations";

const LeaveNoManBehind_Objective1_LRI: objective = {
  id: "O-YUMZRU",
  name: "Dead Soldier",
  description: "Locate and mark the Dead Soldier near town hall",
  position: [22558.94381332311, 20762.519034190107],
  type: ObjectiveType.MARK,
  faction: LamangRecoveryInitiative,
  types: [MarkerType.TASK, MarkerType.MARK, MarkerType.GUNNY, MarkerType.PHALANG],
  location: PhaLang
  
}

const LeaveNoManBehind_Objective1_MMS: objective = {
  id: "O-INNU3Y",
  name: "Dead Soldier",
  description: "Locate and mark the Dead Soldier near town hall",
  position: [16176.775929952164, 12376.388208820372],
  type: ObjectiveType.MARK,
  faction: MithrasSecuritySystems,
  types: [MarkerType.TASK, MarkerType.MARK, MarkerType.GUNNY, MarkerType.NAMTHAVEN],
  location: NamThaven
  
}

const LeaveNoManBehind_Objective1_CSI: objective = {
  id: "O-27548K",
  name: "Dead Soldier",
  description: "Locate and mark the Dead Soldier near town hall",
  position: [10936.715956695667, 21131.080409473157],
  type: ObjectiveType.MARK,
  faction: CrimsonShieldInternational,
  types: [MarkerType.TASK, MarkerType.MARK, MarkerType.GUNNY, MarkerType.KIUVONGSA],
  location: KiuVongsa
  
}


export const LeaveNoManBehind: task = {
  id: "T-VNX4YX",
  name: "Leave No Man Behind",
  briefing: "Since you proved yourself out there and know how to use our trackers, I have another job for you. We've lost a lot of men during our retreat, and many are still unaccounted for. We owe it to them and their loved ones to give them a proper farewell. I need you to find one of these poor bastards and mark his body so we can retrieve it. According to his squadmates, the soldier in question was last seen getting gunned down in one of the backyards around the town hall. I need you to search the area carefully, follow any signs, and mark the precise location with a GPS tracker, so make sure to bring one with you. Remember, we're professionals, and we honor our fallen with dignity. Even if ya'll think otherwise.",
  debriefing: "You've done the right thing. To be honest, I never liked the guy. He was too gung-ho and would always run his mouth, but that's not the point. We may have lost him in battle, but we haven't lost our sense of duty. Thanks to your efforts, his family will find solace in knowing their loved one will be returned to them, even if he was an asshole.",
  objectives: [
    LeaveNoManBehind_Objective1_LRI,
    LeaveNoManBehind_Objective1_MMS,
    LeaveNoManBehind_Objective1_CSI,
  ],
  vendor: Gunny,
  level: 0,
  prerequisites: CacheRetrieval,
  items: [
    GPSTracker
  ],
  notMultiLocation: true,
}