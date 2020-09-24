import { AbstractSortableDictionary } from "./AbstractSortableDictionary";
import { DicRegion } from "./base$DicRegion";
export class DicCountry extends AbstractSortableDictionary {
  static NAME = "base$DicCountry";
  regions?: DicRegion[] | null;
}
export type DicCountryViewName =
  | "_base"
  | "_local"
  | "_minimal"
  | "dicCountry.full.edit";
export type DicCountryView<V extends DicCountryViewName> = V extends "_base"
  ? Pick<
      DicCountry,
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
      DicCountry,
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
  ? Pick<DicCountry, "id" | "languageValue">
  : V extends "dicCountry.full.edit"
  ? Pick<
      DicCountry,
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
      | "regions"
    >
  : never;
