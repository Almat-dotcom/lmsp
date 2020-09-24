import { AbstractSortableDictionary } from "./AbstractSortableDictionary";
import { DicCountry } from "./base$DicCountry";
import { DicCity } from "./base$DicCity";
export class DicRegion extends AbstractSortableDictionary {
  static NAME = "base$DicRegion";
  country?: DicCountry | null;
  cities?: DicCity[] | null;
}
export type DicRegionViewName =
  | "_base"
  | "_local"
  | "_minimal"
  | "dicRegion.edit"
  | "dicRegion.full";
export type DicRegionView<V extends DicRegionViewName> = V extends "_base"
  ? Pick<
      DicRegion,
      | "id"
      | "languageValue"
      | "legacyID"
      | "langValue1"
      | "description1"
      | "langValue2"
      | "description2"
      | "langValue3"
      | "description3"
      | "langValue4"
      | "description4"
      | "langValue5"
      | "description5"
      | "startDate"
      | "endDate"
      | "code"
      | "isSystemRecord"
      | "active"
      | "order"
      | "langValue"
      | "description"
    >
  : V extends "_local"
  ? Pick<
      DicRegion,
      | "id"
      | "legacyID"
      | "langValue1"
      | "description1"
      | "langValue2"
      | "description2"
      | "langValue3"
      | "description3"
      | "langValue4"
      | "description4"
      | "langValue5"
      | "description5"
      | "startDate"
      | "endDate"
      | "code"
      | "isSystemRecord"
      | "active"
      | "order"
      | "langValue"
      | "description"
      | "languageValue"
    >
  : V extends "_minimal"
  ? Pick<DicRegion, "id" | "languageValue">
  : V extends "dicRegion.edit"
  ? Pick<
      DicRegion,
      | "id"
      | "legacyID"
      | "langValue1"
      | "description1"
      | "langValue2"
      | "description2"
      | "langValue3"
      | "description3"
      | "langValue4"
      | "description4"
      | "langValue5"
      | "description5"
      | "startDate"
      | "endDate"
      | "code"
      | "isSystemRecord"
      | "active"
      | "order"
      | "langValue"
      | "description"
      | "languageValue"
      | "country"
    >
  : V extends "dicRegion.full"
  ? Pick<
      DicRegion,
      | "id"
      | "legacyID"
      | "langValue1"
      | "description1"
      | "langValue2"
      | "description2"
      | "langValue3"
      | "description3"
      | "langValue4"
      | "description4"
      | "langValue5"
      | "description5"
      | "startDate"
      | "endDate"
      | "code"
      | "isSystemRecord"
      | "active"
      | "order"
      | "langValue"
      | "description"
      | "languageValue"
      | "cities"
      | "country"
    >
  : never;
