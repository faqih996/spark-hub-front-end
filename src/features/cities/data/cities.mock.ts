import { officeSpaces } from "../../offices/data/officeSpaces.mock";
import { City } from "../types/city.types";

const CityNames = [
  "Jakarta",
  "Medan",
  "Bandung",
  "Semarang",
  "Surabaya",
  "Yogyakarta",
  "Denpasar",
  "South Tangerang",
  "Bekasi",
  "Bogor",
  "Depok",
];

export const cities: City[] = CityNames.map((name, index) => {
  const officeCount = officeSpaces.filter(
    (space) => space.location === name,
  ).length;

  return {
    id: index + 1,
    name,
    officeCount: officeCount,
    count: Math.floor(Math.random() * 100) + 1,
    image: `/assets/images/thumbnails/thumbnails-${(index % 3) + 1}.png`,
    slug: name.toLowerCase().replace(/ /g, "-"),
  };
});
