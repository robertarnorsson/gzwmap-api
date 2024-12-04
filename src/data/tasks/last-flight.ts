import {MarkerType, ObjectiveType, objective, task} from "../../types";
import {Artisan} from "../vendors";
import { PhaLangAirfield } from "../locations";

const LastFlight_Objective1: objective = {
    id: "O-IYAL3I",
    name: "Downed Plane/Liko Savang",
    description: "Search the airfield and uncover what happened to Liko Savang.",
    position: [17580.54740775755, 20478.616564872125],
    type: ObjectiveType.LOCATE,
    types: [MarkerType.TASK, MarkerType.LOCATE, MarkerType.ARTISAN, MarkerType.PHALANGAIRFIELD],
    location: PhaLangAirfield
}

export const LastFlight: task = {
    id: "T-M276IC",
    name: "Last Flight",
    briefing: "Merc, I've got a job for you. I'm looking for a certain individual who has been working as a pilot at Pha Lang Airfield. It seems you've taken quite a liking to that place, so now you can head back and finally do something useful. The pilot's name is Liko Savang, and he's a spineless piece of shit. You two have that in common. He got involved in some sort of huge drug deal, tried to skim some off the side, and ended up in way over his head. Normally, I wouldn't care for a lowlife like that, but let's just say he and i are bound by blood, much to my dismay, so I need to know what happened to him. Search the airfield and report back with any info about his fate, no matter what it may be, okay? I'll have your reward ready, don't you worry about that.",
    debriefing: "That fucking idiot... I kept telling him he'd wind up dead, one way or another. He probably packed up shop at the first sign of trouble, filled the plane to the brim with stolen drugs, and tried to run away. That's all he ever did his whole miserable life. Maybe if I were a better cousin to him, none of this would have happened... You're still here? You did your job, so get lost.",
    objectives: [
        LastFlight_Objective1,
    ],
    vendor: Artisan,
    level: 0,
}
