import { MarkerType, lz } from "../types";
import { LamangRecoveryInitiative, MithrasSecuritySystems, CrimsonShieldInternational } from "./factions";
import { BanPa, BlueLagoon, FortNarith, HuntersParadise, KiuVongsa, MidnightSapphire, NamThaven, PhaLang, PhaLangAirfield, Sawmill, TigerBay, YBL1 } from "./locations";

export const ALPHA1: lz = {
  id: "LZ-90C53M",
  name: "ALPHA 1",
  position: [23270.286021054624,20831.08761001807],
  discoverable: false,
  types: [MarkerType.LZ, MarkerType.LRI, MarkerType.PHALANG],
  location: PhaLang,
  faction: LamangRecoveryInitiative
};

export const ALPHA2: lz = {
  id: "LZ-MFCZYK",
  name: "ALPHA 2",
  position: [21313.972388869504,21263.689082468252],
  discoverable: false,
  types: [MarkerType.LZ, MarkerType.LRI, MarkerType.PHALANG],
  location: PhaLang,
  faction: LamangRecoveryInitiative
};

export const ALPHA3: lz = {
  id: "LZ-9KC7CX",
  name: "ALPHA 3",
  position: [21612.34636213281,20033.121282091568],
  discoverable: true,
  types: [MarkerType.LZ, MarkerType.LRI, MarkerType.PHALANG],
  location: PhaLang,
  faction: LamangRecoveryInitiative
};

export const BRAVO1: lz = {
  id: "LZ-ZMVI2R",
  name: "BRAVO 1",
  position: [15686.038078410764, 11837.731415924447],
  discoverable: false,
  types: [MarkerType.LZ, MarkerType.MSS, MarkerType.NAMTHAVEN],
  location: NamThaven,
  faction: MithrasSecuritySystems
};

export const BRAVO2: lz = {
  id: "LZ-V6X68C",
  name: "BRAVO 2",
  position: [17454.18325621555, 12793.892647895247],
  discoverable: false,
  types: [MarkerType.LZ, MarkerType.MSS, MarkerType.NAMTHAVEN],
  location: NamThaven,
  faction: MithrasSecuritySystems
};

export const BRAVO3: lz = {
  id: "LZ-B8NQ44",
  name: "BRAVO 3",
  position: [16432.648140861824, 13554.11821036863],
  discoverable: true,
  types: [MarkerType.LZ, MarkerType.MSS, MarkerType.NAMTHAVEN],
  location: NamThaven,
  faction: MithrasSecuritySystems
};

export const CHARLIE1: lz = {
  id: "LZ-LMRA9V",
  name: "CHARLIE 1",
  position: [10971.562365050118, 21884.845857546272],
  discoverable: false,
  types: [MarkerType.LZ, MarkerType.CSI, MarkerType.KIUVONGSA],
  location: KiuVongsa,
  faction: CrimsonShieldInternational
};

export const CHARLIE2: lz = {
  id: "LZ-TH16ZT",
  name: "CHARLIE 2",
  position: [10228.210238646843, 20002.904019857553],
  discoverable: false,
  types: [MarkerType.LZ, MarkerType.CSI, MarkerType.KIUVONGSA],
  location: KiuVongsa,
  faction: CrimsonShieldInternational
};

export const CHARLIE3: lz = {
  id: "LZ-F63FPL",
  name: "CHARLIE 3",
  position: [11480.602558904846, 20070.46464488615],
  discoverable: true,
  types: [MarkerType.LZ, MarkerType.CSI, MarkerType.KIUVONGSA],
  location: KiuVongsa,
  faction: CrimsonShieldInternational
};

export const FOXTROT1: lz = {
  id: "LZ-FAAIOP",
  name: "FOXTROT 1",
  position: [14915.357539816763, 22056.783692581266],
  discoverable: false,
  types: [MarkerType.LZ, MarkerType.HUNTERSPARADISE],
  location: HuntersParadise,
};

export const FOXTROT2: lz = {
  id: "LZ-540X6V",
  name: "FOXTROT 2",
  position: [13405.421189845008, 22240.02580509617],
  discoverable: true,
  types: [MarkerType.LZ, MarkerType.HUNTERSPARADISE],
  location: HuntersParadise,
};

export const FOXTROT3: lz = {
  id: "LZ-VL42YA",
  name: "FOXTROT 3",
  position: [13883.842820853142, 20636.576931631713],
  discoverable: true,
  types: [MarkerType.LZ, MarkerType.HUNTERSPARADISE],
  location: HuntersParadise,
};

export const INDIA1: lz = {
  id: "LZ-UYB9DS",
  name: "INDIA 1",
  position: [23241.8315675693, 16956.34540713739],
  discoverable: false,
  types: [MarkerType.LZ, MarkerType.BANPA],
  location: BanPa,
};

export const INDIA2: lz = {
  id: "LZ-D9JZHZ",
  name: "INDIA 2",
  position: [22529.838916313038,15800.615167153941],
  discoverable: true,
  types: [MarkerType.LZ, MarkerType.BANPA],
  location: BanPa,
};

export const INDIA3: lz = {
  id: "LZ-9U3A16",
  name: "INDIA 3",
  position: [22341.863109181228, 16830.082302850795],
  discoverable: true,
  types: [MarkerType.LZ, MarkerType.BANPA],
  location: BanPa,
};

export const LIMA1: lz = {
  id: "LZ-8TD3YI",
  name: "LIMA 1",
  position: [10909.912078540192,13509.568465485141],
  discoverable: true,
  types: [MarkerType.LZ, MarkerType.YBL1],
  location: YBL1,
};

export const LIMA2: lz = {
  id: "LZ-JZ4SX2",
  name: "LIMA 2",
  position: [12024.639937397538, 12733.163106699225],
  discoverable: false,
  types: [MarkerType.LZ, MarkerType.YBL1],
  location: YBL1,
};

export const LIMA3: lz = {
  id: "LZ-P2Q8RV",
  name: "LIMA 3",
  position: [9806.529078497286, 13172.67054006697],
  discoverable: true,
  types: [MarkerType.LZ, MarkerType.YBL1],
  location: YBL1,
};

export const MIKE1: lz = {
  id: "LZ-TVS105",
  name: "MIKE 1",
  position: [13070.505923503206, 15036.13849193258],
  discoverable: true,
  types: [MarkerType.LZ, MarkerType.FORTNARITH],
  location: FortNarith,
};

export const MIKE2: lz = {
  id: "LZ-0UDVV3",
  name: "MIKE 2",
  position: [13710.993319356385, 13949.452285505175],
  discoverable: true,
  types: [MarkerType.LZ, MarkerType.FORTNARITH],
  location: FortNarith,
};

export const MIKE3: lz = {
  id: "LZ-5BGTEO",
  name: "MIKE 3",
  position: [13135.497872360957, 12685.744466993372],
  discoverable: true,
  types: [MarkerType.LZ, MarkerType.YBL1],
  location: YBL1,
};

export const ECHO1: lz = {
  id: "LZ-CKW0BK",
  name: "ECHO 1",
  position: [9915.064408436621,17783.13562439619],
  discoverable: true,
  types: [MarkerType.LZ, MarkerType.SAWMILL],
  location: Sawmill,
};

export const ECHO2: lz = {
  id: "LZ-FSJGLU",
  name: "ECHO 2",
  position: [10340.70736014786,16943.07204126685],
  discoverable: false,
  types: [MarkerType.LZ, MarkerType.SAWMILL],
  location: Sawmill,
};

export const ECHO3: lz = {
  id: "LZ-8OL89S",
  name: "ECHO 3",
  position: [10779.417526988516, 18080.676478853235],
  discoverable: false,
  types: [MarkerType.LZ, MarkerType.SAWMILL],
  location: Sawmill,
};

export const KILO1: lz = {
  id: "LZ-PYL7A1",
  name: "KILO 1",
  position: [22341.787128684362,12398.897199174731],
  discoverable: true,
  types: [MarkerType.LZ, MarkerType.BLUELAGOON],
  location: BlueLagoon,
};

export const KILO2: lz = {
  id: "LZ-PYGB22",
  name: "KILO 2",
  position: [23367.610180274194, 12460.144721198982],
  discoverable: true,
  types: [MarkerType.LZ, MarkerType.BLUELAGOON],
  location: BlueLagoon,
};

export const KILO3: lz = {
  id: "LZ-RGO7Q7",
  name: "KILO 3",
  position: [23025.609636382625, 13265.137611685726],
  discoverable: true,
  types: [MarkerType.LZ, MarkerType.BLUELAGOON],
  location: BlueLagoon,
};

export const NOVEMBER1: lz = {
  id: "LZ-M1TQ03",
  name: "NOVEMBER 1",
  position: [19091.71660626894, 13693.760553206865],
  discoverable: true,
  types: [MarkerType.LZ, MarkerType.TIGERBAY],
  location: TigerBay,
};

export const NOVEMBER2: lz = {
  id: "LZ-BB0SCS",
  name: "NOVEMBER 2",
  position: [21064.142272701374, 12463.804123723097],
  discoverable: true,
  types: [MarkerType.LZ, MarkerType.TIGERBAY],
  location: TigerBay,
};

export const JULIET1: lz = {
  id: "LZ-XKFA9Z",
  name: "JULIET 1",
  position: [21388.824282878133,15769.441888599353],
  discoverable: true,
  types: [MarkerType.LZ, MarkerType.TIGERBAY],
  location: TigerBay,
};

export const JULIET2: lz = {
  id: "LZ-GBFIA4",
  name: "JULIET 2",
  position: [20929.8761990855, 13989.614433507486],
  discoverable: true,
  types: [MarkerType.LZ, MarkerType.TIGERBAY],
  location: TigerBay,
};

export const JULIET3: lz = {
  id: "LZ-J1365Q",
  name: "JULIET 3",
  position: [22196.48234501346, 13673.056678730502],
  discoverable: true,
  types: [MarkerType.LZ, MarkerType.TIGERBAY],
  location: TigerBay,
};

export const JULIET4: lz = {
  id: "LZ-9QX7NX",
  name: "JULIET 4",
  position: [20018.659402665227, 14870.979318768048],
  discoverable: true,
  types: [MarkerType.LZ, MarkerType.TIGERBAY],
  location: TigerBay,
};

export const DELTA1: lz = {
  id: "LZ-MDB4RO",
  name: "DELTA 1",
  position: [12074.076438495336, 13993.996790395608],
  discoverable: true,
  types: [MarkerType.LZ, MarkerType.FORTNARITH],
  location: FortNarith,
};

export const DELTA2: lz = {
  id: "LZ-X7NSNV",
  name: "DELTA 2",
  position: [11449.533934716892,15689.2994753938],
  discoverable: true,
  types: [MarkerType.LZ, MarkerType.FORTNARITH],
  location: FortNarith,
};

export const DELTA3: lz = {
  id: "LZ-LQXO3O",
  name: "DELTA 3",
  position: [10078.225637999114, 14809.025967840817],
  discoverable: true,
  types: [MarkerType.LZ, MarkerType.FORTNARITH],
  location: FortNarith,
};

export const DELTA4: lz = {
  id: "LZ-CY5PSD",
  name: "DELTA 4",
  position: [9695.096721332888, 15708.988904745784],
  discoverable: true,
  types: [MarkerType.LZ, MarkerType.FORTNARITH],
  location: FortNarith,
};

export const HOTEL1: lz = {
  id: "LZ-8ZHPX4",
  name: "HOTEL 1",
  position: [17329.56391838899,21825.108210557086],
  discoverable: false,
  types: [MarkerType.LZ, MarkerType.MIDNIGHTSAPPHIRE],
  location: MidnightSapphire,
};

export const HOTEL2: lz = {
  id: "LZ-3D6SPN",
  name: "HOTEL 2",
  position: [16338.321960287696, 19772.040366207362],
  discoverable: true,
  types: [MarkerType.LZ, MarkerType.MIDNIGHTSAPPHIRE],
  location: MidnightSapphire,
};

export const HOTEL3: lz = {
  id: "LZ-HGHE0K",
  name: "HOTEL 3",
  position: [15277.580874311128,20786.173789744047],
  discoverable: true,
  types: [MarkerType.LZ, MarkerType.MIDNIGHTSAPPHIRE],
  location: MidnightSapphire,
};

export const PAPA1: lz = {
  id: "LZ-ZYZ7U4",
  name: "PAPA 1",
  position: [19508.897332963403, 21511.47865094574],
  discoverable: true,
  types: [MarkerType.LZ, MarkerType.PHALANGAIRFIELD],
  location: PhaLangAirfield,
};

export const PAPA2: lz = {
  id: "LZ-WVRXP5",
  name: "PAPA 2",
  position: [18593.15235543467, 21140.21682292727],
  discoverable: true,
  types: [MarkerType.LZ, MarkerType.PHALANGAIRFIELD],
  location: PhaLangAirfield,
};

export const GOLF1: lz = {
  id: "LZ-JEJT81",
  name: "GOLF 1",
  position: [17237.0085269208, 20398.940502593257],
  discoverable: true,
  types: [MarkerType.LZ, MarkerType.PHALANGAIRFIELD],
  location: PhaLangAirfield,
};

export const GOLF2: lz = {
  id: "LZ-81H96H",
  name: "GOLF 2",
  position: [19279.460802935486, 19482.90453554364],
  discoverable: true,
  types: [MarkerType.LZ, MarkerType.PHALANGAIRFIELD],
  location: PhaLangAirfield,
};

export const GOLF3: lz = {
  id: "LZ-XFITWI",
  name: "GOLF 3",
  position: [17902.657412599187, 19433.08063280357],
  discoverable: true,
  types: [MarkerType.LZ, MarkerType.PHALANGAIRFIELD],
  location: PhaLangAirfield,
};

export const OSCAR1: lz = {
  id: "LZ-OJLXF2",
  name: "OSCAR 1",
  position: [21282.07005264884, 18740.18008515966],
  discoverable: true,
  types: [MarkerType.LZ, MarkerType.PHALANGAIRFIELD],
  location: PhaLangAirfield,
};

export const QUEBEC1: lz = {
  id: "LZ-JTM42D",
  name: "QUEBEC 1",
  position: [14248.538065113746, 19900.769450628068],
  discoverable: true,
  types: [MarkerType.LZ],
};

export const QUEBEC2: lz = {
  id: "LZ-CYO0SM",
  name: "QUEBEC 2",
  position: [13209.016090156681, 19045.327579879362],
  discoverable: true,
  types: [MarkerType.LZ],
};

export const LZs: lz[] = [
  ALPHA1,
  ALPHA2,
  ALPHA3,
  BRAVO1,
  BRAVO2,
  BRAVO3,
  CHARLIE1,
  CHARLIE2,
  CHARLIE3,
  FOXTROT1,
  FOXTROT2,
  FOXTROT3,
  INDIA1,
  INDIA2,
  INDIA3,
  LIMA1,
  LIMA2,
  LIMA3,
  MIKE1,
  MIKE2,
  MIKE3,
  ECHO1,
  ECHO2,
  ECHO3,
  KILO1,
  KILO2,
  KILO3,
  NOVEMBER1,
  NOVEMBER2,
  JULIET1,
  JULIET2,
  JULIET3,
  JULIET4,
  DELTA1,
  DELTA2,
  DELTA3,
  DELTA4,
  HOTEL1,
  HOTEL2,
  HOTEL3,
  PAPA1,
  PAPA2,
  GOLF1,
  GOLF2,
  GOLF3,
  OSCAR1,
  QUEBEC1,
  QUEBEC2,
];