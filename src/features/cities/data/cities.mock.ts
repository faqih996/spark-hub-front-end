import { count } from "console";
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
  return {
    id: index + 1,
    name,
    count: Math.floor(Math.random() * 100) + 1,
    image: `/assets/images/thumbnails/thumbnails-${(index % 3) + 1}.png`,
    slug: name.toLowerCase().replace(/ /g, "-"),
  };
});
