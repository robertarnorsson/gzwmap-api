import { key, KeyTypes, MarkerType } from "../../types"
import { LamangRecoveryInitiative } from "../factions"
import { PhaLang } from "../locations"

export const PLDoctorsOffice: key = {
  id: "K-FENEA3",
  name: "Pha Lang Doctor's Office Key",
  shortName: "PL Doc",
  description: "A key for the local doctor's office in Pha Lang.",
  size: [1, 1],
  image: KeyTypes.SQUAREKEY,
  types: [MarkerType.KEY, MarkerType.PHALANG, MarkerType.QUESTKEY],
  questKey: true,
  location: PhaLang,
  position: [22932.111258241104, 21011.885756292824],
  faction: LamangRecoveryInitiative
}

export const PLAttic: key = {
  id: "K-Z6FK5S",
  name: "Pha Lang Resturant Storage Key",
  shortName: "PL Attic",
  description: "A key for the attic storage space of a resturant in Pha Lang.",
  size: [1, 1],
  image: KeyTypes.ROUNDKEY,
  types: [MarkerType.KEY, MarkerType.PHALANG, MarkerType.QUESTKEY],
  questKey: true,
  location: PhaLang,
  position: [22643.21175250135, 21063.447756478625],
  faction: LamangRecoveryInitiative
}

export const PLMotel: key = {
  id: "K-KPYWFS",
  name: "Pha Lang Motel Room Key",
  shortName: "PL Motel",
  description: "A key to one of the room in the Pha Lang motel.",
  size: [1, 1],
  image: KeyTypes.SQUAREKEY,
  types: [MarkerType.KEY, MarkerType.PHALANG],
  questKey: false,
  location: PhaLang,
  position: [22683.042289700912, 21140.937801685457],
  faction: LamangRecoveryInitiative
}

export const PLLumber: key = {
  id: "K-ICENED",
  name: "Pha Lang Lumberyard Maintenance Room Key",
  shortName: "PL Lubmer",
  description: "A key to the Pha Lang lumberyard maintenance room.",
  size: [1, 1],
  image: KeyTypes.ROUNDGOLDKEY,
  types: [MarkerType.KEY, MarkerType.PHALANG],
  questKey: false,
  location: PhaLang,
  position: [21994.037382036768, 20872.94422465671],
  faction: LamangRecoveryInitiative
}

export const PLUNLRA: key = {
  id: "K-ZO8GZV",
  name: "Pha Lang UNLRA Office Room Key",
  shortName: "PL UNLRA",
  description: "A key to the UNLRA office in Pha Lang.",
  size: [1, 1],
  image: KeyTypes.SQUAREKEY,
  types: [MarkerType.KEY, MarkerType.PHALANG],
  questKey: false,
  location: PhaLang,
  position: [22089.08300610559, 21068.975830186708],
  faction: LamangRecoveryInitiative
}

export const PLMarOfc: key = {
  id: "K-4WMBDZ",
  name: "Pha Lang Marketplace Office Key",
  shortName: "PL MarOfc",
  description: "A key for an office in the Pha Lang marketplace.",
  size: [1, 1],
  image: KeyTypes.ROUNDGOLDKEY,
  types: [MarkerType.KEY, MarkerType.PHALANG],
  questKey: false,
  location: PhaLang,
  position: [22180.241877875305, 20809.72203654915],
  faction: LamangRecoveryInitiative
}

export const PLMarStr: key = {
  id: "K-00C8SH",
  name: "Pha Lang Marketplace Storeroom Key",
  shortName: "PL MarStr",
  description: "A key for an storeroom in the Pha Lang marketplace.",
  size: [1, 1],
  image: KeyTypes.ROUNDKEY,
  types: [MarkerType.KEY, MarkerType.PHALANG],
  questKey: false,
  location: PhaLang,
  position: [22171.521725887826, 20821.38314647741],
  faction: LamangRecoveryInitiative
}

export const PLFin: key = {
  id: "K-R39Z0P",
  name: "Pha Lang Town Hall Finance Department Key",
  shortName: "PL Fin",
  description: "A key to the finance department of the Pha Lang town hall.",
  size: [1, 1],
  image: KeyTypes.SKINNYKEY,
  types: [MarkerType.KEY, MarkerType.PHALANG],
  questKey: false,
  location: PhaLang,
  position: [22552.534693149653, 20712.68471257767],
  faction: LamangRecoveryInitiative
}