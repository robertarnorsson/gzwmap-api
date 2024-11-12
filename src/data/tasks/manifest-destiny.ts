import { MarkerType, ObjectiveType, objective, task } from "../../types";
import { Handshake} from "../vendors";
import { PhaLangAirfield } from "../locations";

const ManifestDestiny_Objective1: objective = {
    id: "O-9LA112",
    name: "Computer",
    description: "Access the flight manifest database",
    position: [18644.75642537109, 20046.55446163164],
    type: ObjectiveType.LOCATE,
    types: [MarkerType.TASK, MarkerType.LOCATE, MarkerType.HANDSHAKE, MarkerType.PHALANGAIRFIELD],
    location: PhaLangAirfield
}


export const ManifestDestiny: task = {
    id: "T-9SNEYA",
    name: "Manifest Destiny",
    briefing: "My man! I got something special for you. It looks like the Pha Lang Airfield was the main entry and exit gate for pretty much anybody visiting this little corner of “paradise.” Be it those rich assholes who stayed at the resort or the more down-to-earth kind with overstocked backpacks and fake Swiss army knives. Well, I have a client on the line who would be very interested in gathering information about who those people were and if they managed to leave the island before whatever happened here. Head to the airfield and access the flight manifest database there. I'm sure that even a backwater country like this didn't store all that shit on paper, so look for a PC and see what you can get from it. And remember, the password is usually “password.”",
    debriefing: "Very good! I have to say, some of these names do pop up! Politicians, celebrities, entrepreneurs, you name it. All of them flocking here to have a taste of something they can't find anywhere else, it seems. Just what was so special about this fucking place?",
    objectives: [
        ManifestDestiny_Objective1,
    ],
    vendor: Handshake,
    level: 0,
}