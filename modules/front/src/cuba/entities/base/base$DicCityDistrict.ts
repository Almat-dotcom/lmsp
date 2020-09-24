import { AbstractSortableDictionary } from "./AbstractSortableDictionary";
import { DicCity } from "./base$DicCity";
export class DicCityDistrict extends AbstractSortableDictionary {
  static NAME = "base$DicCityDistrict";
  city?: DicCity | null;
}
export type DicCityDistrictViewName =
  | "_base"
  | "_local"
  | "_minimal"
  | "dicCityDistrict.full";
export type DicCityDistrictView<
  V extends DicCityDistrictViewName
> = V extends "_base"
  ? Pick<
      DicCityDistrict,
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
      DicCityDistrict,
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
  ? Pick<DicCityDistrict, "id" | "languageValue">
  : V extends "dicCityDistrict.full"
  ? Pick<
      DicCityDistrict,
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
      | "city"
    >
  : never;
