import { MarkerType, item } from "../../types";

export const FakeIntel: item = {
  id: "I-ZC1MA1",
  name: "Fake Intel",
  shortName: "Intel",
  description: "Intel containing deceptive information to confuse the enemy and benefit the PMC.",
  size: [1, 1],
  image: "/assets/items/tasks/fake-intel.png",
  types: [MarkerType.ITEM, MarkerType.INTEL]
}

export const Medallion: item = {
  id: "I-6H322G",
  name: "Kanoa Sinarath's Medallion",
  shortName: "Medallion",
  description: "A gold-plated medallion which as given to Kanoa by his wife",
  size: [1, 1],
  image: "/assets/items/tasks/medallion.png",
  types: [MarkerType.ITEM, MarkerType.TOOL]
}